import React,{useState} from 'react'
import axios from 'axios'
const GoogleFireBase=() =>{
  const [data,setData]=useState({fullname:'',username:'',password:'',})
  const {fullname,username,password}=data
  const onchangeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const onsubmitHandler=e=>{
    //incase any defaults are there..it will removes
e.preventDefault();
    axios.post('https://react-tutorial-963d3-default-rtdb.firebaseio.com/react_post.json',data).then(()=>{console.log('succesfully posted')});
  }

  return(
    <div>
      <center>
        <form onSubmit={onsubmitHandler}>
            <input type='text' value={fullname} name='fullname' placeholder='fullname' onChange={onchangeHandler}/>
          <input type="text" value={username} name='username' placeholder="username"  onChange={onchangeHandler}/>
          <input type="password" value={password} name="password" placeholder="password" onChange={onchangeHandler}/>
          <input type="submit" value="submit"></input>
        </form>
      </center>
      
    </div>
  )
}
export default GoogleFireBase
