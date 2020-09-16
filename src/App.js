import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./componen/Home";
import Home1 from "./componen/Home1";
import Login from "./componen/Login";
import ChatMobile from "./componen/ChatMobile";
import Admin from "./componen/Admin";
import Chat from "./componen/Chat";
import Upload from "./componen/Upload";
import Notfound from "./componen/Notfound";
import {url} from "./Config/Redux"
import {connect} from "react-redux"
import firebase from "./Config/Firebase"

function App(props) {
  return ( 
  	<Router>
  	<Switch>
	     <Route path="/" exact component={Home1} />
	     <Route path="/login" component={Login} />
	     <Route path="/chat" component={Chat} />
	     <Route path="/upload" component={Upload} />
       <Route path="/ChatMobile" component={ChatMobile} />
       <Route path="/Atk" component={Home} />
       <Route path="/Admin" render={()=>{
         if(props.login === false){
           return(
             <Admin />
           )
         }else{
           return(
             <Login />
           )
         }
       }} />
	     <Route component={Notfound} />
	     </Switch>
    </Router>
  );
}

 const method = (dispatch)=>{
  return{
    changeurl:(value)=>dispatch(url(value)),
  }
}
const data = (state)=>{
  return{
    progres : state.progres,
    login: state.login
  }
}
export default connect(data,method)(App);