from flask import Blueprint, render_template
import webbrowser
views = Blueprint('views', __name__)

@views.route('/')
def home():
       return "<p>Sign up</p>"