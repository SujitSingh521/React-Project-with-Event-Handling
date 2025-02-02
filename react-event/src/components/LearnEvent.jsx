import React from 'react'

const LearnEvent = () => {
    const handleClick1 =(e)=>{
        e.preventDefault()
        console.log("Button Clicked 1");
    }
  return (
    <div>
      <button onClick={handleClick1}> Click1</button>
    </div>
  )
}

export default LearnEvent
