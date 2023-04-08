import React from "react";
const MapNuera=()=>{
const arr=['a', 'b', 'c']
  const dict=[{id:1,name:'chandu'},{id:2,name:'ram'}]
  return(
    <div>
        <h1>from list</h1>
        
        {arr.map((value,index)=><li key={index}>{value}</li>)}
        
        <h1>from dictionary</h1>

        {dict.map((value,id)=><li key={id}>{value.id}{value.name}</li>)}
    </div>
  )
}

export default MapNuera
