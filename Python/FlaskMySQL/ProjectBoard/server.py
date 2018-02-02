from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import datetime
import re
import md5 # imports the md5 module to generate a hash

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'project_board_db')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'\d.*[A-Z]|[A-Z].*\d')
DATE_REGEX = re.compile(r'^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')

# Main page, login or register
@app.route('/')
def index():
    if 'login_success' in session:
        if session['login_success'] == True:
            return redirect('/dashboard')
    else:
        return render_template('index.html')

# Go back to main page, delete old flash messages
@app.route('/home')
def home():
    session.pop('_flashes', None)
    return redirect('/')

# Add project information
@app.route('/add')
def add():
    return render_template('add.html')

# Add project information
@app.route('/createproject', methods=['POST'])
def createproject():
    error = False

    # DATE VALIDATION
    if len(request.form['deadline']) < 1:
        flash("Deadline cannot be blank")
        error = True
    elif not DATE_REGEX.match(request.form['deadline']):
        flash("Invalid date, use mm/dd/yyyy format")
        error = True
    else:
        current_time = datetime.datetime.now()
        temp_time = datetime.datetime.strptime(request.form['deadline'], "%m/%d/%Y")
        if temp_time <= current_time:
            flash("Invalid date, cannot be in the past")
            error = True

    if error == True:
        return redirect('/add')
    else:
        query = """INSERT INTO projects (name, description, deadline, priority, assigned_to, status, progress, created_at, updated_at, user_id)
                    VALUES (:name, :description, :deadline, :priority, :assigned_to, :status, :progress, NOW(), NOW(), :user_id)"""  
        data = {
            'name': request.form['name'],
            'description': request.form['description'],
            'deadline': request.form['deadline'],
            'priority': request.form['priority'],
            'assigned_to': session['user_id'],
            'status': "Incomplete",
            'progress': 0.0, 
            'user_id': session['user_id'],
        }
        mysql.query_db(query, data)                          
        return redirect('/dashboard')

# View dashboard
@app.route('/dashboard')
def dashboard():
    query = """SELECT projects.id, projects.name, projects.description, projects.deadline, projects.priority, projects.assigned_to, projects.status, 
            projects.progress, projects.date_completed, projects.created_at, projects.updated_at, projects.user_id, users.username FROM projects 
            LEFT JOIN users ON projects.assigned_to = users.id
            WHERE projects.status = 'incomplete';"""
    projects_list = mysql.query_db(query) 

    query = "SELECT * FROM projects WHERE status = 'complete'"                           
    completed_list = mysql.query_db(query) 

    return render_template('dashboard.html', projects=projects_list, completed=completed_list)

# View selected project details
@app.route('/view/<project_id>')
def view(project_id):
    query = """SELECT projects.id, projects.name, projects.description, projects.deadline, projects.priority, projects.assigned_to, projects.status, 
            projects.progress, projects.date_completed, projects.created_at, projects.updated_at, projects.user_id, users.username FROM projects 
            LEFT JOIN users ON projects.assigned_to = users.id
            WHERE projects.id = :id;"""
    data = {
        'id': project_id,
    }                                                    
    project_list = mysql.query_db(query,data)                        
    return render_template('view.html', project=project_list) 

# Route to update page
@app.route('/update/<project_id>')
def update(project_id):
    query = "SELECT * FROM projects WHERE id = :id"
    data = {
        'id': project_id,
    }                                                    
    project_list = mysql.query_db(query,data)                        
    return render_template('update.html', project=project_list) 

# Update selected project
@app.route('/edit', methods=['POST'])
def edit() :
    
    print request.form
    query = "SELECT * FROM projects WHERE id = :id"
    data = {
        'id': request.form['project-id'],
    }
    info = mysql.query_db(query,data)   
    
    deadline = request.form['deadline']
    priority = request.form['priority']
    assigned_to = session['user_id']
    status = request.form['status']
    progress = request.form['progress']
    date_completed = info[0]['date_completed']

    if deadline == None:
        deadline = info[0]['deadline']
    if priority == None:
        priority = info[0]['priority']
    if assigned_to == None:
        assigned_to = info[0]['assigned_to']
    if status == None:
        status = info[0]['status']
    if progress == None:
        progress = info[0]['progress']
        
    query = """UPDATE projects SET deadline = :deadline, priority = :priority, assigned_to = :assigned_to, status = :status, progress = :progress, updated_at = NOW()
                WHERE id = :id"""    
    data = {
        'id': request.form['project-id'],
        'deadline': deadline,
        'priority': priority,
        'assigned_to': assigned_to,
        'status': status,
        'progress': progress
    }
    mysql.query_db(query, data)

    if status == "complete":
        progress = 100.0
        query = """UPDATE projects SET progress = :progress, date_completed = NOW()
                WHERE id = :id"""    
        data = {
            'id': request.form['project-id'],
            'progress': progress
        }
        mysql.query_db(query, data)

    return redirect('/dashboard') 

# Delete selected project
@app.route('/delete/<project_id>')
def delete(project_id):
    # Now delete message
    query = "DELETE FROM projects WHERE id = :id"
    data = {
        'id': project_id,
    }
    mysql.query_db(query, data)                      
    return redirect('/dashboard') 

# View current user table
@app.route('/users')
def users():
    query = "SELECT * FROM users"                           
    users_list = mysql.query_db(query)                           
    return render_template('users.html', users=users_list) 

# Process actions
@app.route('/process', methods=['POST'])
def process():
    if request.form['action'] == "Details":
        return redirect('/view/' + request.form['project-id'])
    if request.form['action'] == "Update":
        return redirect('/update/' + request.form['project-id'])
    if request.form['action'] == "Delete":
        return redirect('/delete/' + request.form['project-id'])
    return redirect('/dashboard')

# Process login request
@app.route('/login', methods=['POST'])
def login():
    error = False

    hashed_password = md5.new(request.form['password']).hexdigest()
    
    # Get info from database
    query = "SELECT username, password ,id FROM users WHERE username = :username"
    data = {
        'username': request.form['username']
    }                           
    username = mysql.query_db(query,data)

    # Check if username exists, then compare stored password and input password
    if len(username) != 0:
        if username[0]['password'] != hashed_password:
            flash("Username or password is incorrect")
            return redirect('/')
        else:
            session['user_id'] = username[0]['id']
            session['username'] = request.form['username']
            session['login_success'] = True
            session['register_success'] = False
            return redirect('/dashboard')
    else:
        flash("Username or password is incorrect")
        return redirect('/')
    
# Process logout request
@app.route('/logoff')
def logoff():
    session.clear()
    return redirect('/')

# Proces registeration form
@app.route('/register', methods=['POST'])
def register():
    error = False

    # FIRST NAME VALIDATION
    if len(request.form['first_name']) < 2:
        flash("First Name must be two or more letters")
        error = True
    elif request.form['first_name'].isalpha() == False:
        flash("First Name cannot contain numbers")
        error = True
    
    # LAST NAME VALIDATION
    if len(request.form['last_name']) < 2:
        flash("Last Name must be two or more letters")
        error = True
    elif request.form['last_name'].isalpha() == False:
        flash("Last Name cannot contain numbers")
        error = True

    # USERNAME VALIDATION
    query = "SELECT username FROM users WHERE username = :username"
    data = {
        'username': request.form['username']
    }                           
    username = mysql.query_db(query,data)
    if len(username) != 0:
        flash(request.form['username'] + " has already been registered")
        error = True

    # EMAIL VALIDATION
    if len(request.form['email_address']) < 1:
        flash("Email Address cannot be blank")
        error = True
    elif not EMAIL_REGEX.match(request.form['email_address']):
        flash("Invalid Email Address")
        error = True

    # PASSWORD VALIDATION
    if len(request.form['password']) < 1:
        flash("Password cannot be blank")
        error = True
    elif len(request.form['password']) < 8:
        flash("Password must be at least 8 characters")
        error = True
    elif not PASSWORD_REGEX.match(request.form['password']):
        flash("Invalid Password, must contain at least one uppercase and one number")
        error = True
    
    # DATE VALIDATION
    if len(request.form['birthdate']) < 1:
        flash("Birthdate cannot be blank")
        error = True
    elif not DATE_REGEX.match(request.form['birthdate']):
        flash("Invalid date, use mm/dd/yyyy format")
        error = True
    else:
        current_time = datetime.datetime.now()
        temp_time = datetime.datetime.strptime(request.form['birthdate'], "%m/%d/%Y")
        if temp_time >= current_time:
            flash("Invalid date, cannot be equal or in the future")
            error = True

    # CONFIRM PASSWORD VALIDATION
    if len(request.form['confirm_password']) < 1:
        flash("Confirm Password cannot be blank")
        error = True 
    elif request.form['password'] != request.form['confirm_password']:
        flash("Passwords do not match")
        error = True

    if error == True:
        return redirect('/')
    if error == False:
        # Add to database
        hashed_password = md5.new(request.form['password']).hexdigest()
        query = """INSERT INTO users (first_name, last_name, username, email_address, birthdate, password, created_at) 
                    VALUES (:first_name, :last_name, :username, :email_address, :birthdate, :password, NOW())"""  
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email_address': request.form['email_address'],
            'birthdate': request.form['birthdate'],
            'username': request.form['username'],
            'password': hashed_password,
        }
        mysql.query_db(query, data)
        flash(request.form['username'] + " was added to the system")
        
        # Create session
        session['username'] = request.form['username']
        session['register_success'] = True
        session['login_success'] = False

        return redirect('/users')

app.run(debug=True)