import React ,{useState} from "react";

const UseState=()=>{
    const [name,newName]=useState("chan");
    const [count,newCount]=useState(0);
    return(
        <div>
            <h1>{name}</h1>
            <h1>Count {count}</h1>
            <button onClick={()=>{newName("R Chandu");newCount(count+1)}}>Click To Change The Name</button>
        </div>
    )
}
export default UseState