import os
from flask import Flask, request, render_template, redirect, url_for
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'C:\Users\Joseph Mumford\Desktop\CodingDojo\Python\FlaskFundamentals\FlaskUploads\Uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    # Set result to false, only a successful upload and save will set to true
    result = False
    if request.method == 'POST':
        # Check if file exists in request
        if 'file' not in request.files:
            return render_template("result.html", success=result)
        
        # Get file from request
        file = request.files['file']

        # Check file for a filename
        if file.filename == '':
            return render_template("result.html", success=result)
        
        # Check to ensure file has allowed extension
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            result = True
            return render_template("result.html", success=result)   
        else:
            return render_template("result.html", success=result)  
        
    return render_template("index.html")

app.run(debug=True)