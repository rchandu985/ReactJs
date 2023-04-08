import axios from 'axios'
import { useState } from 'react'
const AxiosGetNuera=()=>{
    const [api_data,newdata]=useState([])
    axios.get('https://jsonplaceholder.typicode.com/todos').then(data=>{newdata(data.data)})
    return(
        <div>
            <h1>from axios</h1>
            {api_data.map(item=><li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default AxiosGetNuera