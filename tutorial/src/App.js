import React ,{Component} from 'react'
import Props from './components_Nuera/Props'
import ClickMe from './components_Nuera/OnClick'
import UseState from './components_Nuera/UseState_Nuera'
import UseEffectNuera from './components_Nuera/Use_Effect_Nuera'
import OnChangeNuera from './components_Nuera/On_Change_Nuera'
import MapNuera from './components_Nuera/Map_Nuera'
import FilterNuera from './components_Nuera/Filter_Nuera'
//import APIFetch from './components_Nuera/API_Fetch'
//import AxiosGetNuera from './components_Nuera/axios_Get_Nuera'
//import OnSubmitNuera from './components_Nuera/on_submit_Nuera'
import GoogleFireBase from './components_Nuera/google_fire_base_Nuera'
import {Dashboard} from './components_Nuera/react_router_Nuera'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import { Login,About,Register,Welcome } from './components_Nuera/react_router_Nuera'

//class based component
/*export default class me extends Component{
  data={"name":"Python"}
  render(){
    return(
    <div>
      <Props name={this.data.name}/>
      <ClickMe/>
      <UseState/>
      <UseEffectNuera/>
      <OnChangeNuera/>
      <MapNuera/>
      <FilterNuera/>
      <GoogleFireBase/>
      
      
    </div>
  )}
}
//<APIFetch/> <AxiosGetNuera/> <OnSubmitNuera/>
/*const App=()=>{
  return(<div><h1>Hi</h1></div>)
}
export default App*/

//for dashboard purpose

const App =()=>{
  return(
    <BrowserRouter>
      <Dashboard/>
      <Routes>
        
        <Route path='/Login' Component={Login}/>
        <Route path='/Register' Component={Register}/>
        <Route path='/About' Component={About}/>
        <Route path='/welcome' Component={Welcome}/>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App