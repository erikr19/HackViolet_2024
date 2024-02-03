from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/test', methods=['GET'])
def test_connection():
    return jsonify(message='testing to see if flask backend is connected')

@app.route('/api/search', methods=['GET'])
def get_movies():
    access_token = os.environ.get('READ_ACCESS_TOKEN')
    url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    headers = {
        "accept": "application/json",
        "Authorization": "Bearer "+access_token
    }
    response = requests.get(url, headers=headers)
    return response.content
    

if __name__ == '__main__':
     app.run(port=8000, debug=True)