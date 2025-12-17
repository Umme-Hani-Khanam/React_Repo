import { useState } from "react";


function Counter()
{
    const [count,setCount]=useState(0);
    function handle()
    {
        setCount(count+1)

    }
    return(
        <div>
            <h3 style={{backgroundColor:"pink" ,margin:"auto" ,textAlign:"center"}}>Count:{count}</h3>
            <button onClick={handle}>Increment</button>
        </div>
    )
}
export default Counter;