import { useState } from "react"
import Data from './data_Nuera.json'

export const SearchFilter=()=>{
    const [search,newSearch]=useState('');
    return(
        <div>
            <center>
                <h4>Enter The City Name : {search}</h4>
                <input value={search} onChange={(e)=>{newSearch(e.target.value)}} />
                <br/>
                {Data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city=>{return(<div style={{"border":"2px solid black",paddingTop:"10px","margin":"10px",paddingBottom:"10px",maxWidth:"50%"}}>{city.name}</div>)})}
                
            </center>
        </div>
    )
}
