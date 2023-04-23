import React,{useContext} from "react";
import { store } from "../App";
export const ComponentBNuera=()=>{
    const [past]=useContext(store)
    return(<div>
        <h1>from component B : {past}</h1>
    </div>)
}