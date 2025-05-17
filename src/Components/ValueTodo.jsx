import React, { useEffect, useState } from 'react';
import axios from "axios";

const ValueTodo = () => {
  const [val, setVal] = useState([]);
   
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get("http://localhost:3000/todo")
      .then(res => setVal(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      fetchTodos(); 
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <>
      {val.map((item) => (
        <div className='para-div' key={item._id}>
          <p className='para'>{item.task}
            <span 
            onClick={() => handleDelete(item._id)}
            className="delete-btn"
          >
            <i className="fas fa-trash" id='icon'></i> 
          </span></p>
          
        </div>
      ))}
    </>
  );
};

export default ValueTodo;