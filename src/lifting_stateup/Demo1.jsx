
import { useState } from "react";
import Demo2 from "./Demo2";

const Demo= (Props)=>{
    let [count,setCount]=useState(0)
    function Incr ()
    {
        setCount(count+1)
    }
    function Decr()
    {
        setCount(count-1)
    }
    return(
        <>
        <h2>Demo1 component</h2>
        <h1>{count}</h1>
        <button onClick={Incr}>Increment</button>
        <button onClick={Decr}>Decrement</button>
        <Demo2  count={count} Incr={Incr} Decr={Decr}/>
        
        </>
    )

}
export default Demo;
