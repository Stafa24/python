from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def principale():
    return('hello World')

@app.route('/test')
def routetest():
        return render_template('devoirjs.html')
