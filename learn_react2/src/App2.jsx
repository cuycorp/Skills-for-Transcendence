import './App.css'
import {useState} from "react";

function App() {
  const name = "Pedro";
  const age = 12;
  const [showMessage, setShowMessage] = useState(false); {/* Global variable like*/}

  function toggleMessage(){
    if(showMessage){
      setShowMessage(false);
    }
    else{
      setShowMessage(true);
    }
    console.log(showMessage);
  }
  return (
    <div>
      <Greetingtwo name={"Timoteo"}/>
      <Greetingthree name={"Pia"} age={12} />
      <button onClick={toggleMessage}>Click Me</button>
      {showMessage && <Message/>}
    </div>
  );
}

export default App;
