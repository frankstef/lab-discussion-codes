export default function TempInputField({func, value, unit}){
    return(
        <>
            <legend>Temperature Converter</legend>
            {/* onChange is the event listener that implements the function inside when there are changes within the input fields*/}
            <input type="number" onChange={e => func(e.target.value)} value={value}/> {unit} 
        </>
    )
}