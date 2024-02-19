
import './App.css';
import React from 'react';
import { useState } from 'react';



function App() {

   let [counter, setcounter]= useState(0);
  // let [counter2, setcounter2] = useState(1);
    

  let addValue=()=>{
     console.log("",Math.random());
     setcounter(counter+1);
     

  }
   let addValue2= ()=>{
    // console.log( " ",Math.random());
    setcounter(counter-1);

   }
   let totalcount=counter;

  return (
    <>
    
    <h1>Welcome to my code room</h1>
    <h2> here is vote button and you guys start voting now </h2>
    <button onClick={addValue}>increase vote{counter} </button>
    <br></br>
    <button onClick={addValue2}> decrease vote{counter}</button>
       <tb></tb><button>total count :-{ totalcount}</button>
    </>
  ); 
}

export default App; // Export the App component as the default export

