from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import datetime
import re
import md5 # imports the md5 module to generate a hash

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'the_wall_db')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'\d.*[A-Z]|[A-Z].*\d')

# Main page, login or register
@app.route('/')
def index():
    return render_template('index.html')

# Go back to main page, delete old flash messages
@app.route('/home')
def home():
    session.pop('_flashes', None)
    return redirect('/')

# View current user table
@app.route('/view')
def view():
    query = "SELECT * FROM users"                           
    users_list = mysql.query_db(query)                           
    return render_template('users.html', users=users_list) 

# Process login request
@app.route('/login', methods=['POST'])
def login():
    error = False

    hashed_password = md5.new(request.form['password']).hexdigest()
    
    # Get info from database
    query = "SELECT id, username, password FROM users WHERE username = :username"
    data = {
        'username': request.form['username']
    }                           
    user_info = mysql.query_db(query,data)

    # Check if username exists, then compare stored password and input password
    if len(user_info) != 0:
        if user_info[0]['password'] != hashed_password:
            flash("Username or password is incorrect")
            return redirect('/')
        else:
            session['user_id'] = user_info[0]['id']
            session['username'] = user_info[0]['username']
            session['login_success'] = True
            session['register_success'] = False
            return redirect('/wall')
    else:
        flash("Username or password is incorrect")
        return redirect('/')

# Proces registeration form
@app.route('/register', methods=['POST'])
def process():
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
    if len(request.form['email']) < 1:
        flash("Email Address cannot be blank")
        error = True
    elif not EMAIL_REGEX.match(request.form['email']):
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
        query = "INSERT INTO users (first_name, last_name, username, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :username, :email, :password, NOW(), NOW())"    
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'username': request.form['username'],
            'email': request.form['email'],
            'password': hashed_password,
        }
        mysql.query_db(query, data)
        flash(request.form['username'] + " was added to the system")
        
        # Create session
        session['username'] = request.form['username']
        session['register_success'] = True
        session['login_success'] = False

        return redirect('/wall')

# Route to wall page
@app.route('/wall')
def wall():

    query1 = """SELECT users.username AS poster, messages.id AS message_id, messages.message, DATE_FORMAT(messages.created_at, '%M %e, %Y') AS post_date
                FROM messages 
                LEFT JOIN users ON messages.user_id = users.id
                ORDER BY messages.id ASC;"""
    messages_list = mysql.query_db(query1)   
    
    query2 = """SELECT users.username AS commenter, comments.id, comments.message_id AS message_id, comments.comment, DATE_FORMAT(comments.created_at, '%M %e, %Y') AS post_date
                FROM comments
                LEFT JOIN users ON comments.user_id = users.id;
                ORDER BY comments.id ASC;"""
    comments_list = mysql.query_db(query2)     
    
    return render_template('wall.html',wall_messages=messages_list, wall_comments=comments_list) 

# Route to post message or comment to wall
@app.route('/submit', methods=['POST'])
def submit():
    if request.form['submit-type'] == 'message':
        query = "INSERT INTO messages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW())"    
        data = {
            'user_id': session['user_id'],
            'message': request.form['message'],
        }
        mysql.query_db(query, data)
    if request.form['submit-type'] == 'comment':         
        query = "INSERT INTO comments (message_id, user_id, comment, created_at, updated_at) VALUES (:message_id, :user_id, :comment, NOW(), NOW())"    
        data = {
            'message_id': request.form['message-id'],
            'user_id': session['user_id'],
            'comment': request.form['comment'],
        }
        mysql.query_db(query, data)
    return redirect('/wall') 

# Route to delete message or comment
@app.route('/delete', methods=['POST'])
def delete():
    if request.form['submit-type'] == 'message':
        # Delete comments for message first, else you'll have orphaned records
        query = "DELETE FROM comments WHERE comments.message_id = :message_id"
        data = {
            'message_id': request.form['message-id'],
        }
        mysql.query_db(query, data)
        # Now delete message
        query = "DELETE FROM messages WHERE id = :message_id"
        data = {
            'message_id': request.form['message-id'],
        }
        mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/logoff')
def logoff(): 
    for key in session.keys():
        session.pop(key)    
    return redirect('/')


app.run(debug=True)