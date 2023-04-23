//import React ,{Component} from 'react'
//import Props from './components_Nuera/Props'
//import ClickMe from './components_Nuera/OnClick'
//import UseState from './components_Nuera/UseState_Nuera'
//import UseEffectNuera from './components_Nuera/Use_Effect_Nuera'
//import OnChangeNuera from './components_Nuera/On_Change_Nuera'
//import MapNuera from './components_Nuera/Map_Nuera'
//import FilterNuera from './components_Nuera/Filter_Nuera'
//import APIFetch from './components_Nuera/API_Fetch'
//import AxiosGetNuera from './components_Nuera/axios_Get_Nuera'
//import OnSubmitNuera from './components_Nuera/on_submit_Nuera'
//import GoogleFireBase from './components_Nuera/google_fire_base_Nuera'
//import {Dashboard} from './components_Nuera/react_router_Nuera'
//import {BrowserRouter,Routes, Route} from 'react-router-dom'
//import { ImagesNuera } from './components_Nuera/images_import'
//import { Login,About,Register,Welcome} from './components_Nuera/react_router_Nuera'
//import PathParams from './components_Nuera/react_router_Nuera'
//import { AudioNuera } from './components_Nuera/audio_Nuera'
//import { VideoNuera } from './components_Nuera/video_Nuera'
//import { Download } from './components_Nuera/download_Nuera'
//import {SearchFilter} from './components_Nuera/search_Filter_Nuera'
//import {UseRefNuera} from './components_Nuera/useRef_Nuera'
//import {UseReducerNuera} from './components_Nuera/use_Reducer_Nuera'
import { ComponentANuera } from './context_api/component_A'
import { ComponentBNuera } from './context_api/component_B'
import { createContext,useState } from 'react'

export const store=createContext();

const App=()=>{
  const [past,now]=useState(0)
  return(
    <store.Provider value={[past,now]}>
      <center>
        <ComponentANuera/>
        <ComponentBNuera/>
        <button onClick={()=>now(past+1)}>ClickMe</button>
      </center>
    </store.Provider>
    //<SearchFilter/>
    //<UseRefNuera/>
    //<UseReducerNuera/>
    
  )
}
export default App
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

/*const App =()=>{
  return(
     
    <BrowserRouter>
      
      <Dashboard/>
      <Routes>
        
        <Route path='/Login' Component={Login}/>
        <Route path='/Register' Component={Register}/>
        <Route path='/About' Component={About}/>
        <Route path='/welcome' Component={Welcome}/>
        <Route path='/queryParams/:name' Component={PathParams}/>
      </Routes>
      <ImagesNuera/>
      <AudioNuera/>
      <VideoNuera/>
      <Download/>
    </BrowserRouter>
    
  )
}
export default App

//for redux
/*import { connect } from "react-redux"
import { InAction } from "./redux/actions_Nuera"
import { DeAction } from "./redux/actions_Nuera" */
/*const App=({local_variable,InAction,DeAction})=>{
  return(
    <div>
      <center>
        <h1>{local_variable}</h1>
        <button onClick={InAction}>Increment</button>
        <button onClick={DeAction}>Decrement</button>
      </center>
    </div>
  )
}

const mapStateToProps=state=>({
  local_variable:state
})

export default connect(mapStateToProps,{InAction,DeAction})(App);*/

//boostrap linking

/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;*/

