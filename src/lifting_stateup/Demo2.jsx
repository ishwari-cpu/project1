

function Demo2({count,Incr,Decr}) {
    return (
        <div>

            <h2>its Demo2</h2>
            <h1>{count}</h1>
            <button onClick={Incr}>Increment2</button>
            <button onClick={Decr}>Decrement</button>
            
        </div>
    );
}

export default Demo2;