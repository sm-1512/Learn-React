import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";


function App() {
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 mb-4">Tailwind Test</h1>
      <Card userName="chaiaurcode" someObj={newArr}/> 
    </>
  );
}

export default App;
