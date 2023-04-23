// usestate : The useState() hook is a function that returns an array containing two elements:
//  the current state and a function to update the state. The useState() hook is used to add state 
//  to a functional component. Here is an example:

// import react from "react";
import { useState } from "react";

function Count (){
    const [count , setcount]=useState(0)
    function handalClick(){
        setcount(count +1)
    }

    function handalClicks(){
        setcount(count -1)
    }

    

    return(
        <>
        <button onClick={handalClick}>+</button>
        <h1>{count}</h1>
        <button onClick={handalClicks}>-</button>
        </>
    )
}
export default Count;