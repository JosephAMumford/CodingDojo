from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import datetime
import re

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'users_db')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# route to index 
@app.route('/')
def index():
    query = "SELECT * FROM users"                           
    users_list = mysql.query_db(query)                           
    return render_template('index.html', users=users_list) 

# route to add user
@app.route('/add', methods=['get'])
def add():
    return render_template("add.html")

# show user info
@app.route('/show/<user_id>', methods=['get'])
def show(user_id):
    query = "SELECT * FROM users WHERE id = :id"
    data = {
        'id': user_id,
    }                          
    user_list = mysql.query_db(query, data)   
    return render_template("view.html", user=user_list)

# route to edit user info, get record from database
@app.route('/edit/<user_id>', methods=['get'])
def edit(user_id):
    query = "SELECT * FROM users WHERE id = :id"
    data = {
        'id': user_id,
    }                          
    user_list = mysql.query_db(query, data)   
    return render_template("edit.html", user=user_list)

# route to delete user info from database
@app.route('/delete/<user_id>', methods=['get'])
def delete(user_id):
    query = "DELETE FROM users WHERE id = :id"
    data = {
        'id': user_id,
    }
    mysql.query_db(query, data)
    return redirect('/')

#route to update user info, update database
@app.route('/update', methods=['post'])
def update():
    error = False

    # EMAIL VALIDATION
    if len(request.form['email_address']) < 1:
        flash("Email Address cannot be blank")
        error = True
    elif not EMAIL_REGEX.match(request.form['email_address']):
        flash("Invalid Email Address")
        error = True
    if error == True:
        return redirect('/edit/' + request.form['user-id'])
    else:
        query = """UPDATE users SET first_name = :first_name, last_name = :last_name, email_address = :email_address, updated_at = NOW()
                WHERE id = :user_id"""    
        data = {
            'user_id': request.form['user-id'],
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email_address': request.form['email_address'],
        }
        mysql.query_db(query, data)
        return redirect('/')

# route to insert record into database
@app.route('/create', methods=['post'])
def create():
    error = False

     # EMAIL VALIDATION
    if len(request.form['email_address']) < 1:
        flash("Email Address cannot be blank")
        error = True
    elif not EMAIL_REGEX.match(request.form['email_address']):
        flash("Invalid Email Address")
        error = True
    
    if error == True:
        return redirect('/add')
    else:
        query = "INSERT INTO users (first_name, last_name, email_address, created_at, updated_at) VALUES (:first_name, :last_name, :email_address, NOW(), NOW())"    
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email_address': request.form['email_address'],
        }
        mysql.query_db(query, data)
        return redirect('/')

# route to process actions from user table
@app.route('/process', methods=['post'])
def process():
    if request.form['action'] == "Show":
        return redirect('/show/' + request.form['user-id'])
    if request.form['action'] == "Edit":
        return redirect('/edit/' + request.form['user-id'])
    if request.form['action'] == "Delete":
        return redirect('/delete/' + request.form['user-id'])
    return redirect('/')


app.run(debug=True)