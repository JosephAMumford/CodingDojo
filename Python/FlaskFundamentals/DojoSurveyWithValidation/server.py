# import Flask
from flask import Flask, render_template, redirect, request, session, flash

import re

# create a regular expression object that we can use run operations on
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def submit():
    error = False
    if len(request.form['name']) < 1:
        flash("Name cannot be blank!")
        error = True
    elif len(request.form['comment']) < 1:
        flash("Comment cannot be blank!")
        error = True
    elif len(request.form['comment']) > 120:
        flash("Comment cannot be longer than 120 characters") 
        error = True  
    
    if error == True:
        return redirect('/')
    else:
        session['name'] = request.form['name']
        session['location'] = request.form['location']
        session['language'] = request.form['language']
        session['comment'] = request.form['comment']

        return render_template("results.html")

    

app.run(debug=True)