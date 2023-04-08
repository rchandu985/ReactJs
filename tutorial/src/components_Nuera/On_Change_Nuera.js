import React,{useState} from "react";

const OnChangeNuera=()=>{
    const [username,newUsername]=useState("")
    const data=name=>{
        newUsername(name.target.value)
    }
    return(
        <div>
            <h1>Enter The Username</h1>
            <input placeholder="Enter The Username" value={username} type="text" onChange={data}/>
            <h1>{username}</h1></div>
    )
}
export default OnChangeNuera