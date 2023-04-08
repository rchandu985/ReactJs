import React ,{useEffect, useState} from 'react'
const APIFetch=() =>{
  const[data,setData]=useState([]);
useEffect(() =>{fetch('https://jsonplaceholder.typicode.com/todos').then(resp=>resp.json()).then(json=>setData(json))})
return(
  <div>
    <h1>From Get Api</h1>
    {data.map(item=> <li key={item.id}>{item.title}</li>)}
  </div>
)
}
export default APIFetch                               
