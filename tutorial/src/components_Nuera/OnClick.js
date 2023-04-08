import React ,{Component} from "react";

export default class ClickMe extends Component{
    render(){
        return(
            <div>
                <button style={{backgroundColor:"crimson",color:"white",borderRadius:"10px"}} onClick={()=>{window.alert("you clicked the button")}}>Click Me</button>
                <h1 style={{backgroundColor:"crimson",color:"white",borderRadius:"10px"}} onClick={()=>{window.alert("you clicked the text")}}>click the text</h1>
            </div>
        )
    }
}