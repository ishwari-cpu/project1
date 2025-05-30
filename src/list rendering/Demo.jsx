function Demo ()

{
    let student=[
        {name:"ishwari",age:19},
        {name:"gayatri",age:20}
    ]
    return(
        <>
        <h1>List rendering and keya</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>srno</th><th>name</th><th>age</th>
                </tr>
            </thead>

            {
                student.map((s,index)=>{
                    return (
                        <>
                        <tr key={index}>
                            <th>{index+1}</th><th>{s.name}</th><th>{s.age}</th>

                        </tr>
                        
                        
                        </>
                    )
                })
            }

        </table>
        
        
        </>
    )
}
export default Demo;