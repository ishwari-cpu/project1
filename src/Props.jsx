
// function Props({name,age})  variable 
// function Props({stud})
function Props({Students})
{
    return(
        <>
        
        {/* <h1>{name}-{age}</h1>  */}
        

        {/* {stud.name}-{stud.age}*/}
        

            {

                Students.map((S) => {
                    // console.log(SVGAElement.name)
                    return (
                        <h1>{S.name} - {S.age}</h1>
                    );


                })

            }
        
        </>
    )
}
export default Props;