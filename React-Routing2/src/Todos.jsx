import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-dom"
const Todos = () => {
    const[todos,setTodos]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>setTodos(data.slice(0,10)))
    },[]);
  return (
    <div>
        <h2>Todos</h2>
        {todos.map((todo)=>(
            <div key={todo.id}
            onClick={()=>navigate('/todo/${todo.id}')}
            >
                <h4>{todo.title}</h4>
                <p>Status:{todo.completed ? "Completed" : "Not Completed"}</p>
                </div>
        ))}
    </div>
  );
}

export default Todos