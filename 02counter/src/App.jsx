import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(15)

  //let counter =15;
  
  const addValue = () =>{
    console.log('clicked', counter);
    
    
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    

  }

  const decreaseValue = () =>{
    setCounter(counter-1)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={decreaseValue}
      >Remove Value {counter}</button>
    </>
  );
}

export default App
