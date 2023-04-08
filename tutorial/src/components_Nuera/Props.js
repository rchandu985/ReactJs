import React,{Component} from "react";

export default class Props extends Component{
    render(){
        return(
            <div>
                <h1>from app.js {this.props.name}</h1>
            </div>
        )
    }
}