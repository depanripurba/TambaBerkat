import React from "react";
import { updatejudulchatadmin } from "../../../Config/Redux"
import { statuschatadmin } from "../../../Config/Redux"
import { updatelistchatadmin } from "../../../Config/Redux"
import {connect} from 'react-redux'
class Index extends React.Component{

clicked = (e)=>{
	let varbaru = e.target.innerHTML
	this.props.uptitle(varbaru)
	this.props.upstatus(true)
	console.log('ini adalaha/' + varbaru)
	this.props.upchatadmin(varbaru)
}


render(){
    return (
    	<div className="kotakpelanggan" onClick={(e)=>this.clicked(e)} >{this.props.result}</div>
    	)
 }
}
const method = (dispatch)=>{
  return{
    uptitle:(value)=>dispatch(updatejudulchatadmin(value)),
    upstatus:(value)=>dispatch(statuschatadmin(value)),
    upchatadmin:(value)=>dispatch(updatelistchatadmin(value)),
  }
}
const data = (state)=>{
  return{
  }
}
export default connect(data,method)(Index);
