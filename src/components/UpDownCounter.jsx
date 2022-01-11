import React, {useState} from 'react';
import './UpDownCounter.css';

function UpDownCounter(){
    const [count, setCount] = useState(0);
    // if(setCount(1){
    //     let counter = count + 1;
    // } else  counter = count -1;
    return(
        <div className="UpDownCounter">
                <button onClick={() => setCount(count + 1)}>Up</button>
                <p>{count}</p>
                <button onClick={() => setCount(count - 1)}>Down</button>
        </div>
    )

}
export default UpDownCounter;