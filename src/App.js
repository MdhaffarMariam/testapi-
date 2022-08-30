import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [imb, setImb] = useState([])
  const [text, setText] = useState("")

  
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data',
    params: {locale_info: 'en_US', lang_ID: '1', time_utc_offset: '28800'},
    headers: {
      'X-RapidAPI-Key': '34ae82f816msh36e96ccbc92d538p1c71fajsne39d26b6ae0b',
      'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setImb(response.data.countrirs)
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    
    <div className="App">
      <input type ='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      {imb.filter(el=>(el.cname.toLowerCase().includes(text.toLowerCase()))).map(el=>( 
        <div>
      <h3>{el.cname}</h3>
      <h2>{el.country_international_phone_code}</h2>
      <img src={el.flag_image_32x32} alt = 'this is a pic'/>
      </div>))}
    </div>
  );
}

export default App;
