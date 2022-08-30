import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [imb, setImb] = useState([])

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: {q: 'game of thr'},
    headers: {
      'X-RapidAPI-Key': '34ae82f816msh36e96ccbc92d538p1c71fajsne39d26b6ae0b',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setImb(response.data)
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
  return (
    
    <div className="App">
      {imb.map(el=>( 
        <div>
      <h3>{el.l}</h3>
      <h2>{el.id}</h2>
      </div>))}
    </div>
  );
}

export default App;
