# import Flask
from flask import Flask, render_template, redirect, request, session, flash
#from time import gmtime, strftime
import datetime
import re

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

# Expressions to match patterns with input
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'\d.*[A-Z]|[A-Z].*\d')
DATE_REGEX = re.compile(r'^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def submit():
    error = False
    
    # FIRST NAME VALIDATION
    if len(request.form['first_name']) < 1:
        flash("First Name cannot be blank")
        error = True
    elif request.form['first_name'].isalpha() == False:
        flash("First Name cannot contain numbers")
        error = True
    
    # LAST NAME VALIDATION
    if len(request.form['last_name']) < 1:
        flash("Last Name cannot be blank")
        error = True
    elif request.form['last_name'].isalpha() == False:
        flash("Last Name cannot contain numbers")
        error = True
    
    # EMAIL VALIDATION
    if len(request.form['email']) < 1:
        flash("Email Address cannot be blank")
        error = True
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address")

    # DATE VALIDATION
    if len(request.form['birthdate']) < 1:
        flash("Birthdate cannot be blank")
        error = True
    elif not DATE_REGEX.match(request.form['birthdate']):
        flash("Invalid date, use mm/dd/yyyy format")
        error = True
    current_time = datetime.datetime.now()
    temp_time = datetime.datetime.strptime(request.form['birthdate'], "%m/%d/%Y")
    if temp_time >= current_time:
        flash("Invalid date, cannot be equal or in the future")
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
    
    # CONFIRM PASSWORD VALIDATION
    if len(request.form['confirm_password']) < 1:
        flash("Confirm Password cannot be blank")
        error = True 
    elif request.form['password'] != request.form['confirm_password']:
        flash("Passwords do not match")

    # Redirect to root and display errors if any, else go to success page
    if error == True:
        return redirect('/')
    else:
        session['first_name'] = request.form['first_name']
        session['last_name'] = request.form['last_name']
        session['email'] = request.form['email']
        session['birthdate'] = request.form['birthdate']
        session['password'] = request.form['password']
        session['confirm_password'] = request.form['confirm_password']
        session['success'] = True

        return render_template("success.html")

app.run(debug=True)