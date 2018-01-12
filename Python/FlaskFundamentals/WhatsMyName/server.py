from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    myName = request.form['name']
    print myName
    return redirect('/')

app.run(debug=True)
