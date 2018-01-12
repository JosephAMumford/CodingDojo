from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    return render_template("results.html", name=request.form['name'], location=request.form['location'], language=request.form['language'], comment=request.form['comment'])

app.run(debug=True)