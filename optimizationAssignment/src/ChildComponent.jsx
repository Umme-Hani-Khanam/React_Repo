import React from 'react'

const ChildComponent = () => {
 console.log("Child rendering")
 
    return (
    <div>
        <h5>I am child component</h5>
        


    </div>
  )
}

export default React.memo(ChildComponent)