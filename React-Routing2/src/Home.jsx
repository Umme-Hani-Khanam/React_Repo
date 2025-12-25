import React from 'react'
import {NavLink} from "react-dom";
const Home = () => {
  return (
    <div>
        <h2>Welcome to Home Page</h2>
        <NavLink to ="/login">Login</NavLink>
    </div>
  )
}

export default Home