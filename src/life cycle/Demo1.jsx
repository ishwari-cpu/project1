import React, { useState } from 'react';
import Demo2 from './Demo2';

function Demo1(props) {
   
    let[display,setdisplay]=useState(true)
    return (
        <div>
            <h1>Demo Component</h1>
            {
                display ? <Demo2 display={display}/> : null
            }
            <button onClick={()=>setdisplay(! display)}>toggle</button>

        </div>
    );
}

export default Demo1;