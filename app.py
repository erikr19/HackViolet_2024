from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/test', methods=['GET'])
def test_connection():
    return jsonify(message='testing to see if flask backend is connected')

if __name__ == '__main__':
     app.run(port=8000, debug=True)