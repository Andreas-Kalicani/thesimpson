import React, {useState} from "react"; 
import axios from "axios"; 
import './App.css';

function App() {
 const [simpson, setSimpson] = useState({})
 const [images, setImages] = useState(""); 

 const getData = () =>{
   fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
   .then(response => response.json())
   .then(data => setSimpson({src: data[0].image, name: data[0].character, quote: data[0].quote}))
   console.log(simpson)
 }   
 
 

  return (
    <div className="App">
    <img src={simpson.src}/>
   <h1>{simpson.name}</h1>
   <p>{simpson.quote}</p>
    <button onClick={getData}>Get the Quotes</button>
    </div>
  );
}


export default App;
