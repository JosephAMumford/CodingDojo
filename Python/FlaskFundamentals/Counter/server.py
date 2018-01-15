from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'MySecretKey'

# our index route will handle rendering our form
@app.route('/')
def index():
    # Check to see if 'counter' has a value, if not, set it to zero
    if 'counter' not in session:
        session['counter'] = 1
    
    return render_template("index.html")

# This route increases the counter by 2
@app.route('/plus_two', methods=['post'])
def plus_two():
    session['counter'] += 2
    return redirect('/')

# This route resets the counter to 1
@app.route('/reset', methods=['post'])
def reset():
    session['counter'] = 1
    return redirect('/')

app.run(debug=True) # run our server