import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Error connecting to Flask backend.');
      });
  }, []);

  return (
    <div className="App">
      <h1>React and Flask Connectivity Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
