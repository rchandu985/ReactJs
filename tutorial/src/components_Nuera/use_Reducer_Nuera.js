import React,{useReducer} from "react";

const initialState={count:0};

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return({count:state.count+1})
        case 'decrement':
            return({count:state.count-1})
        default:
            throw Error();
    }
}

export const UseReducerNuera=()=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    return(
        <center>
            <div>
                {state.count}
                <button onClick={()=>dispatch({type:"increment"})}>+</button>
                <button onClick={()=>dispatch({type:"decrement"})}>-</button>
            </div>
        </center>
    )
}