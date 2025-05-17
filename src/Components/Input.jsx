import axios from 'axios'
import React from 'react'

 const Input = ({data , valueofInput}) => {

 
    
    const HandleChange = (e) =>{
        data(e.target.value)
    }

    
    const Handlevalue = async (e) =>{
     
      try {
      await  axios.post("http://localhost:3000/todo" , {task: valueofInput})
      
      } catch (error) {
        console.log(error , "error in posting the value")
      }
      
    }

    
  return (
   <>
   <div className='input'>
    <form action="submit" onSubmit={Handlevalue} >
      <div className='input-two'>
    <input type="text" onChange={HandleChange}  placeholder='Enter task ....'/>
      <button>Add</button>
      </div>
      </form>
   </div>
   
   </>
  )
}


export default Input