import React from "react"
import Header from "../Child/Header"
import Konten from "../Child/Content"
import Footer from "../Child/Footer"
import {updatechat} from '../../Config/Redux'
import {userid} from '../../Config/Redux'
import {tetapkan} from '../../Config/Redux'
import {connect} from 'react-redux'
class Index extends React.Component{

	componentDidMount(){
	this.props.upchat(null)
  let uidtetap = localStorage.getItem('user');
  if(uidtetap){
    this.props.userlama(uidtetap)
    console.log("user id tidak akan dirubah karena datanya masih ada")
  }else{
    this.props.setuser(null)
    console.log("user id akan dirubah karena di dalam localstorage tidak terdapat user id")
  }
  
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
    userlama:(value)=>dispatch(tetapkan(value)),
  }
}
const data = (state)=>{
  return{
  }
}
export default connect(data,method)(Index);

 