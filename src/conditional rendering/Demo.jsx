// function Demo (){
    // let islogin=true
    // if(islogin)
    // {
    //     return(
    //         <>
    //         <h1>Home Page</h1>
            
            
            
    //         </>
    //     )
    // }
    // else{
    //     return(
    //         <>
    //         <h1>Login Page</h1>
    //         </>
    //     )
    // }
// }
// export default Demo;

function Demo (){
    let islogin=true
    return (
        <>
        {
        //    islogin ? <h1>Home Page</h1> : <h1>Login Page</h1>
        islogin && <h1>Home Page</h1>
        
        }
        </>
    )
}
export default Demo;