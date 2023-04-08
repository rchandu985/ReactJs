import React,{useEffect,useState} from "react";

const UseEffectNuera=()=>{
    
    const [count,newCount]=useState(0);
    useEffect(()=>{console.log(count)},[count])
    return(
        <div>
            <h1>Use Effect Count {count}</h1>
            <button onClick={()=>{newCount(count+1)}}>use Effect</button>
        </div>
    )
}
export default UseEffectNuera