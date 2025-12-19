

import React from 'react'
import { useState } from 'react';
const ColorToggle = () => {
 const [Color,setColor]=useState("false");
const changeColor=()=>{
    setColor(!Color);
}
    return (
    <div style={
        {
            backgroundColor:Color?"red":"blue",
            fontSize:"large",
           gap:"10px",
            padding:"30px",
            margin:"auto",
            display:"flex",
            justifyItems:"center",
            color:"white"

        }
    }>
        <h2>Color toggle</h2>
        <button onClick={changeColor}>Change Color</button>
        
    </div>
  )
}

export default ColorToggle


