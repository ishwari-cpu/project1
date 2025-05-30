// import React,{useState} from "react";
// import { renderToStaticMarkup } from "react-dom/server";
// const Demo= (Props)=>{
//     let [count,setCount]=useState(0)
//     return(
//         <>
//         <h2>forms control component</h2>
//         <h1>{count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//          <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        
        
//         </>
//     )

// }
// export default Demo;



// 




// import React from 'react';

// function Demo(props) {
//     let handleInput=(e)=>{
//         console.log(e.target.name)
//     }
//     return (
//         <div>
//             enter name:
//             <input type="text" name="txt_name" id=""onChange={handleInput} /><br />
//             <select name="select city" id=""onChange={handleInput}>
//                 <option value="wakadi">wakadi</option>
//                 <option value="rahata">rahata</option>
//                 <option value="shrirampur">shrirampur</option>
                
//             </select>
            
//         </div>
//     );
// }

// export default Demo;

import React from 'react';

function Demo(props) {
    function handleInput(e)
    {
       console.log(e.target.value)
    }
         

    return (
        <div>
            <input type="text" name="txt_name" id="" onChange={handleInput}placeholder='enter name'/>
             <input type="text" name="txt_age" id="" onChange={handleInput}placeholder='enter age'/>
             {/* <input type="text" name="txt_age" id=""onChange={(e)=>{console.log(e.target.value)}} /> */}
            
        </div>
    );
}

export default Demo;