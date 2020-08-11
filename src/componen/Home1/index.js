import React from "react"
import Header from "../Child/Header"
import Konten from "../Child/Content"
import Footer from "../Child/Footer"
import {updatechat} from '../../Config/Redux'
import {userid} from '../../Config/Redux'
import {connect} from 'react-redux'
class Index extends React.Component{

	componentDidMount(){
	this.props.upchat(null)
  this.props.setuser(null)
	console.log("Ntah kenapa susah sekali ini")
}

render(){
   return (
   	<div> 
   		<Header />
   		<Konten />
   		<Footer />
   	</div>
   	)
  }
}
const method = (dispatch)=>{
  return{
    upchat:(value)=>dispatch(updatechat(value)),
    setuser:(value)=>dispatch(userid(value)),
  }
}
const data = (state)=>{
  return{
  }
}
export default connect(data,method)(Index);

 