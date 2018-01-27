from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import datetime
import re

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'full_friends_db')

DATE_REGEX = re.compile(r'^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')

@app.route('/')
def index():
    query = "SELECT * FROM friends"                           
    friends = mysql.query_db(query)                           
    return render_template('index.html', all_friends=friends) 

@app.route('/add', methods=['POST'])
def create():
    error = False

    # DATE VALIDATION
    if len(request.form['friend_since']) < 1:
        print "No length"
        flash("Date cannot be blank")
        error = True
    elif not DATE_REGEX.match(request.form['friend_since']):
        print "No format"
        flash("Invalid date, use mm/dd/yyyy format")
        error = True
    else:
        current_time = datetime.datetime.now()
        temp_time = datetime.datetime.strptime(request.form['friend_since'], "%m/%d/%Y")
        if temp_time >= current_time:
            print "No future"
            flash("Invalid date, cannot be equal or in the future")
            error = True

    if(error == True):
        return redirect('/')
    else:
        print "No error"
        query = "INSERT INTO friends (name, age, friend_since, year) VALUES (:name, :age, DATE_FORMAT(STR_TO_DATE(:friend_since, '%m/%d/%Y'), '%M %e, %Y'), DATE_FORMAT(STR_TO_DATE(:friend_since, '%m/%d/%Y'), '%Y'))"
        data = {
                'name': request.form['name'],
                'age':  request.form['age'],
                'friend_since': request.form['friend_since']
            }
        mysql.query_db(query, data)
        return redirect('/')

app.run(debug=True)
