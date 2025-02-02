import React from 'react'

const LearnEvent = () => {
    const handleClick1 = (e) => {
        e.preventDefault()
        console.log("Button Clicked 1");
    }
    const handleClick2 = (myId) => {

        console.log("Button Clicked 2", myId);
    }
    return (
        <div>
            {/* Without Argument */}
            <button onClick={handleClick1}> Click1</button>
            <br />
            {/* With Argument */}
            <button onClick={(e) => handleClick2("myId")}>Click2</button>
        </div>
    )
}

export default LearnEvent
