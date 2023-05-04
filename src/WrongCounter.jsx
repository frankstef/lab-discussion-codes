//importance of useState

export default function WrongCounter(){
    let val = 0;
    return (
        <>
            <h1>Wrong Counter: {val}</h1>
            <button onClick={()=>{
                val = val +1;
                console.log(val);
            }}>Add</button>
        </>
    )
}