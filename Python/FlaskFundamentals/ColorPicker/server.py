from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/', methods=['POST'])
def process():
    r = request.form['red']
    g = request.form['green']
    b = request.form['blue']
    new_color = "rgb(" + str(r) +"," + str(g) + "," + str(b) + ")"
    return render_template("index.html", page_color=new_color)

app.run(debug=True)