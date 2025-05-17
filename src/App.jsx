import { useEffect, useState } from 'react'
import Input from './Components/Input'
import ValueTodo from "./Components/ValueTodo"
import './App.css'
import axios from 'axios'


function App() {
  
  const [inputValue, setInputValue] = useState("");
  

  const handleInputChange = (value) => {
    setInputValue(value);
    setShow(true)
  };

 
  

  return (
    <>
    <div className='main-container'>
      <h1>Todo App MERN </h1>
      <div className='button'>
     
     <Input data={handleInputChange} valueofInput={inputValue}/> 
     
     
     </div>
      
      
     </div>
     <div className='below-container'>
      {
       <ValueTodo/> 
       
       }
      </div>
    </>
  )
}

export default App