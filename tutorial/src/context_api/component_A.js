import React,{useContext} from "react";
import { store } from "../App";
export const ComponentANuera=()=>{
    const [past]=useContext(store)
    return(<div>
        <h1>from component A : {past}</h1>
    </div>)
}