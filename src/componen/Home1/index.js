import React from "react"
import Header from "../Child/Header"
import Konten from "../Child/Content"
import Footer from "../Child/Footer"
import {updatechat} from '../../Config/Redux'
import {userid} from '../../Config/Redux'
import {changelocalstorage} from '../../Config/Redux'
import {connect} from 'react-redux'
class Index extends React.Component{

	componentDidMount(){
  let uidtetap = localStorage.getItem('user');
  if(uidtetap === null){
    changelocalstorage(null)
  }else{
    this.props.upchat(null)
  }
}



render(){
   return (
   	<div> 
    <meta http-equiv="Copyright" content="PERCETAKAN TAMBA BERKAT" />
	  <meta name="robots" content="index, follow" />
    <meta name="description" content="PERCETAKAN TAMBA BERKAT" />
    <meta name="keywords" content="PERCETAKAN TAMBA BERKAT" />
	  <meta name="author" content="PERCETAKAN TAMBA BERKAT" />
	  <meta name="language" content="Indonesia" />
	  <meta name="revisit-after" content="7" />
	  <meta name="webcrawlers" content="all" />
	  <meta name="rating" content="general" />
	  <meta name="spiders" content="all" />
    <meta name="google-site-verification" content="0A1cTZAKkrxCd6_A9P8ngf4OWkYn8Ur-47o54H0oSlE" />
		<title> PERCETAKAN TAMBA BERKAT  </title>
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

 