import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] =useState(15)

//  let counter=5;

const addValue = () =>{
  if(counter<20){
    console.log("clicked",counter);
    counter=counter+1;
    setCounter(counter)
  }
 
}

const removeValue=()=>{
  if(counter>0){
    counter=counter-1;
    setCounter(counter)
  }
  
}

  return (
    <>
      <h1>Hello Dheeraj</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button><br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
