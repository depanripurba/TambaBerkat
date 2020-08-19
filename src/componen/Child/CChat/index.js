import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./style.css"
class Index extends React.Component{
 
render(){
  if(this.props.datachat.hasil.id === 'your'){
    return(
      <div className="me" >
       <div className="orangnya" > <img src="./tb.png" alt="logo" className="gambarlogo" /> </div>
       <div className="pesannya" > {this.props.datachat.hasil.pesan} </div>
     </div>
      )
  }else{
    return (
      <div className="your" >
        <div className="pesanmu" >{this.props.datachat.hasil.pesan}</div>
        <div className="orangnya" > <FaUserCircle /></div>
    </div>
    )
  }
 
 }
 }
export default Index;
