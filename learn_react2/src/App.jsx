import './App.css'
import {useState} from "react";

function Message()
{
  return <h1>Message!!</h1>
}

function Greetingtwo(props)
{
  return <h1>Hello I am {props.name}!!</h1>
}

function Greetingthree({name, age})
{
  return <h1>Hello I am {name}, my age is {age}!!</h1>
}


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

{/*
  Topics: 
  1. {}, permit to insert javascript inside UI
  2. Component: fuction that return Jsx, always start wurh a capital letter
  3. Passing arguments to components: is passing a "prop", which takes the type of an object
  4. event handling 
  5. User interaction
  usestate to let ui chnage of application: rerendering

  6. Conditional rendering: using condition && <></>, or if to decide what to render
*/}