import React, { useState }from "react";

const Project= () =>{
const [click,setClick] = useState(0)

    function increaseCount(){
        setClick(click+1)
    }

    return(
            <div>
                <p>Button clicked {click} times</p>
                <button onClick={increaseCount}>Click me</button>
            </div>
    )
}

export default Project