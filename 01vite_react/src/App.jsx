import  Chai from "./chai.jsx"

function App() {
  
  const myName = "Sahil Mishra"
  return (
    <>
       <Chai/>
       <h1>My name is {myName}</h1> 
    </>
   
  )
}
//Here 'myName' is evaluated expression, meaning that only final outcome can be rendered and no evaluation like if-else etc.

export default App
