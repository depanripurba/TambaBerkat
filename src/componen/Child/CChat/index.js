import React from "react";
import "./style.css"
class Index extends React.Component{
 
render(){
  if(this.props.datachat.hasil.id === 'me'){
    return(
      <div className="me" >
       <div className="orangnya" > {this.props.datachat.hasil.id} </div>
       <div className="pesannya" > {this.props.datachat.hasil.pesan} </div>
     </div>
      )
  }else{
    return (
      <div className="your" >
        <div className="pesanmu" >{this.props.datachat.hasil.pesan}</div>
        <div className="orangnya" >{this.props.datachat.hasil.id}</div>
    </div>
    )
  }
 
 }
 }
export default Index;
