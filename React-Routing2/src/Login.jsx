import Todos from "./Todos";
import React, { useState } from 'react'
import {useNavigate} from "react-dom"
const Login = () => {
    const Navigate=useNavigate();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const handleLogin=()=>{
        if(email==='admin@gmail.com' && password==='admin@123')
        {   
            localStorage.setItem("isLoggedIn","true")
            Navigate("/todos")
            
        }
        else{
            setError("Invalid email or password");        }
    }
  return (
    <div>
        <form>
            <input type='email' name='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' name='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </form>
        {error && <p>{error}</p>}
    </div>
  )
}

export default Login