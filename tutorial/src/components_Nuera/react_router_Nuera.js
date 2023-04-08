import React from "react";
import { Link} from "react-router-dom";//mandotary
import { Navigate } from 'react-router-dom';
import { useState } from "react";

export const Dashboard =()=>{
    return(
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Login"><li>Login</li></Link>
                <Link to="/Register"><li>Register</li></Link>
                <Link to="/About"><li>About</li></Link>
            </ul>
        </div>
    )
}

export const Login=()=>{
    const [auth,trueAuth]=useState(false)
    if (auth){
        return <Navigate to='/welcome'/>
    }
    return(
        <div>
            <button onClick={()=>{trueAuth(true)}}>Login</button>
        </div>
    )
}

export const Register=()=>{
    return(
        <div>
            <h1>Welcome to Register Page</h1>
        </div>
    )
}

export const About=()=>{
    return(
        <div>
            <h1>Welcome to About Page</h1>
        </div>
    )
}

export const Welcome=()=>{
    return(
        <div>
            <h1>Hi..Welcome</h1>
        </div>
    )
}