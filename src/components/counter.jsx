import {useState} from "react";


export default function Counter()
{
    function updateCounter(value)
    {
        setCounter(counter + value);
    }

    function doubleCounter()
    {
        setCounter(2 * counter);
    }

    let[counter, setCounter] = useState(0);

    return(
        <div>
            <h1>Counter : {counter}</h1>

            <button onClick = {() => {
                updateCounter(1);
            }}>Increase Counter</button>

            <button onClick = {() => {
                if(counter > 0)
                {
                    updateCounter(-1);
                }
            }}>Decrease Counter</button>

            <button onClick = {() => {
                doubleCounter();
            }}>Double the Counter</button>
        </div>
    )
}
