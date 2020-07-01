import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./componen/Home";
import Login from "./componen/Login";
import Chat from "./componen/Chat";
import Upload from "./componen/Upload";
import Notfound from "./componen/Notfound";

function App() {
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

export default App;
