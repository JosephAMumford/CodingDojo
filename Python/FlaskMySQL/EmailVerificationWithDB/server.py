from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import datetime
import re

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'email_verification')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success')
def success():
    query = "SELECT * FROM users"                           
    users_list = mysql.query_db(query)                           
    return render_template('success.html', users=users_list) 

@app.route('/process', methods=['POST'])
def process():
    error = False

    # EMAIL VALIDATION
    if len(request.form['email_address']) < 1:
        flash("Email Address cannot be blank")
        error = True
    elif not EMAIL_REGEX.match(request.form['email_address']):
        flash("Invalid Email Address")
        error = True

    if error == True:
        return redirect('/')
    if error == False:
        if request.form['formAction'] == 'Add Email':
            # Add Email
            query = "INSERT INTO users (email_address, created_at) VALUES (:email_address, NOW())"
            data = {
                'email_address': request.form['email_address'],
            }
            mysql.query_db(query, data)
            flash("Email Address: " + request.form['email_address'] + " was added to the system")
            return redirect('/success')
        if request.form['formAction'] == 'Delete Email':
            # Delete Email DELETE FROM table_name WHERE condition;
            query = "DELETE FROM users WHERE email_address = :email_address"
            data = {
                'email_address': request.form['email_address'],
            }
            mysql.query_db(query, data)
            flash("Email Address: " + request.form['email_address'] + " was removed from the system")
            return redirect('/success')
        


app.run(debug=True)
