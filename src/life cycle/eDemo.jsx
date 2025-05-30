import React, { useEffect, useState } from 'react';

function Demo(props) {

    let [count,setCount]=useState(0)
    useEffect(()=>{

        console.log("component created /mount")

        return ()=>{
            console.log("component remove/unmount")
            }
            
        
    },[])

    useEffect(()=>{
        console.log("component update")
    },[count])
    return (
        <div>
            <h1>component life cycle</h1>
            {count}
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    );
}

export default Demo;