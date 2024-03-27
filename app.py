from flask import Flask,render_template
app=Flask(__name__)
@app.route('/')
def print():
    return render_template('a.html')
@app.route('/port')
def putvalue():
    return render_template('a1.html')
@app.route('/image')
def printvalue():
    return render_template('a4.html')
@app.route('/print')
def read():
    return render_template('Google.html')
@app.route('/login')
def getvalue():
    return render_template('a8.html')
@app.route('/programs')
def html():
    return render_template('html.html')
if(__name__)=='__main__':
    app.run(debug=True,port=8000)