import React,{useState} from 'react'

const OnSubmitNuera=() =>{
  const [data,setData]=useState({username:'',password:'',})
  const {username,password}=data
  const onchangeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const onsubmitHandler=e=>{
    //incase any defaults are there..it will removes
e.preventDefault();
    console.log(data);
  }

  return(
    <div>
      <center>
        <form onSubmit={onsubmitHandler}>
          < input type="text" value={username} name='username' placeholder="username"  onChange={onchangeHandler}/>
          <input type="password" value={password} name="password" placeholder="password" onChange={onchangeHandler}/>
          <input type="submit" value="submit"></input>
        </form>
      </center>
      
    </div>
  )
}
export default OnSubmitNuera
