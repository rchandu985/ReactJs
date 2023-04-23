import React,{useRef,useEffect} from "react";

export const UseRefNuera=()=>{
    const data=useRef(0)
    
    const onSubmitHandler=e=>{
        e.preventDefault()
     
        console.log(data.current.value)}
        
        useEffect(()=>{
        data.current.focus();
    },[])

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input ref={data} type="text" placeholder="enter the name"/><br/>
                <input type="submit" value="Submit"/>
                
            </form>
          
        </div>
    )
    }
