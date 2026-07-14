import './App.css'
import {useState} from "react";

function App() {

  const [name, setName] = useState(""); 

  function handleChange(event) 
  {
    const value = event.target.value;
    setName(value);
  }
  //event gives acces to information of the input
  return (
    <div>
        <input type="text" placeholder='Name...' onChange={handleChange}></input>
        {name}
    </div>
  );
}

export default App;


//onChange() function allows to call a function everytime there is a change in the value of the input

{/*
  Topics: 
  1. 

  ? why are functions defined inside another function
*/}