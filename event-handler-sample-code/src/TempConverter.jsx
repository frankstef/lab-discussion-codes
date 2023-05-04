import React, {useState} from 'react';
import TempInputField from './TempInputField';


// utility function to convert celsius to fahrenheit and vice versa
const toCelsius = (f) => {
    return (f-32) * 5 / 9
}

const toFahrenheit = (c) => {
    return (c*9/5) +32
}

export default function TempConverter() {
    
    //remebers and updates the values of the variables
    const [celcius, setCelcius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);

    //function to get the value of the field and directly convert the values
    function getValueC(number){
        setCelcius(number);
        setFahrenheit(toFahrenheit(number));
    }

    function getValueF(number){
        setFahrenheit(number);
        setCelcius(toCelsius(number));
    }

    //components
    return(
        <>
        {/* input fields */}
        <TempInputField func ={getValueC} value={celcius} unit={"C"}/>
        <TempInputField func ={getValueF} value={fahrenheit} unit={"F"}/>

        <div>{celcius >= 100 ? "Boiling" : "Not Boiling"}</div>
        </>
    )
}

