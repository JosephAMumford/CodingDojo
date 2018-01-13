from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ninja')
def ninja():
    ninjas = "tmnt.png"
    ninja_name = "Teenage Mutant Ninja Turtles"
    return render_template("ninja.html", image=ninjas, name=ninja_name)

@app.route('/ninja/<color>')
def ninja_color(color):
    ninja = "notapril.jpg"
    ninja_name = "April"
    if color == "blue":
        ninja = "leonardo.jpg"
        ninja_name = "Leonardo"
    elif color == "orange":
        ninja = "michelangelo.jpg"
        ninja_name = "Michelangelo"
    elif color == "red":
        ninja = "raphael.jpg"
        ninja_name = "Raphael"
    elif color == "purple":
        ninja = "donatello.jpg"
        ninja_name = "Donatello"
    return render_template("ninja.html", image=ninja, name=ninja_name)

app.run(debug=True)