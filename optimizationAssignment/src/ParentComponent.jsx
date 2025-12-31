import React, { Suspense, useCallback, useState } from 'react'

const ChildComponent=React.lazy(()=>import("./ChildComponent"))
const ParentComponent = () => {
    const[count,setCount]=useState(0);
   const updateCounter=()=>{
    setCount(count+1)
   }
    console.log("parent rendered")
  return (
    <div>
        <h2>Counter :{count}</h2>
        <button onClick={updateCounter}>Increase</button>
        <Suspense fallback={<h6>Loading..........</h6>}>
            <ChildComponent/>
        </Suspense>
        
    </div>
  )
}

export default ParentComponent