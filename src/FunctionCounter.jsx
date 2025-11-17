import './ClassCounter.css'
import React from "react";
function FunctionCounter(){
    const [count, setCount] =React.useState(0);
    return(
        <div className="class_counter_div">
            <h2>Function Component</h2>
            <h1 className="count">{count}</h1>
            <div className="buttons">
                <button onClick={()=>setCount(count+1)}>+</button>
                <button onClick={()=>{if(count > 0) setCount(count-1)}}>-</button>
            </div>
            <button className="reset-btn" onClick={()=>setCount(0)}>Reset</button>
        </div>  
    );
}
export default FunctionCounter;