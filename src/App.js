import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./componen/Home";
import Login from "./componen/Login";
import Chat from "./componen/Chat";
import Upload from "./componen/Upload";
import Notfound from "./componen/Notfound";
import {url} from "./Config/Redux"
import {connect} from "react-redux"
import firebase from "./Config/Firebase"

function App(props) {
	const makanan = [1,2]
	console.log(makanan)
	makanan.map((r)=>{
		const storage = firebase.storage();
		const storageRef = storage.ref();
        const tangRef = storageRef.child('gambar/'+r+'.jpg');
        tangRef.getDownloadURL().then(function(url) 
        {
            const test = url
            console.log(props)
            props.changeurl(url)

        }).catch(function(error) 
        {
            switch (error.code) 
            {
                case 'storage/object_not_found':
                    break;

                case 'storage/unauthorized':
                    break;

                case 'storage/canceled':
                    break;

                case 'storage/unknown':
                    break;
            }
        });

	})
  return ( 
  	<Router>
  	<Switch>
	     <Route path="/" exact component={Home} />
	     <Route path="/login" component={Login} />
	     <Route path="/chat" component={Chat} />
	     <Route path="/upload" component={Upload} />
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
    progres : state.progres
  }
}
export default connect(data,method)(App);