import React, { useEffect,useState } from 'react';


function Demo2({display}) {

     let [count,setcount]=useState(0)
    useEffect(()=>{
        console.log("Components are created")


    },[display])


    useEffect(()=>{
        return ()=>{
            console.log("Components are unmount")

        }
        
    },[display])

    useEffect(()=>{
        console.log("Components are updated")
    },[count])


    return (
        <div>
            <h1>Demo2 component</h1>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            
        </div>
    );
}

export default Demo2;