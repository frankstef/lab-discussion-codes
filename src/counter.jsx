//install react developer tools
import {useState} from "react";
export default function Counter({value}){
    /*useState hook syntax
    current state - retained value
    state setter - implements of updating the current state
    
    const [current_state, state_setter] = useState(initial_value);

    */


    const [val, setVal] = useState(value);
    function addValue() {
        //alert("Added");
        /*Hookds - special functions that lets you use React features
          State - component-specific memory, since there are certain changes need to remember from certain actions that were done
          useState hook - to remember variables
        
          */

        setVal((prev)=>prev+1);
        //make it a callback, so what we set inside would be what we use to increment
        //should use callback so that it can be semantically correct depending on the users configuration
    }

    return(
        //react fragment:<>, group elements without a wrapper node
        <> 
            <h1>
                Counter: {val}
            </h1>

            {/* <button onClick={(addValue)}>
                Add
            </button> */}

            <button onClick={()=>{
                addValue();
                addValue();
                addValue();
            }}>
                Add
            </button>
        </>
    )
}