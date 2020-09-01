import React from "react";
import "./style.css"
import Header from "../Child/Header"
import Card from "../Child/Card"
import Footer from "../Child/Footer"
import {connect} from "react-redux"
import {Helmet} from "react-helmet"
import {updatedatabarang} from '../../Config/Redux'
class Index extends React.Component{
componentDidMount(){
	this.props.upbarang()
}
  render(){
 
		if(this.props.loading === true){
				return (
  <div> 
	<Helmet>
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
		</Helmet>
			<Header />
			<div className="container">
				<div className ="row atas">
					{
						this.props.barang.map((result)=>{
							return(<Card e={result} />)
						})
					}
				</div> 
			</div>

			<Footer />


		</div>
    )
		}else{
			return(
				<div className="loading" >
		<Helmet>
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
		</Helmet>
				<center className="auto" >
					<button className="btn btn-primary" type="button" disabled>
  					<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  					Loading...
					</button>
				</center>
				</div>
			)
		}
    
}
}

 const method = (dispatch)=>{
  return{
    upbarang:(value)=>dispatch(updatedatabarang(value)),
  }
}
 
const data = (state)=>{
  return{
    barang : state.barang,
		loading : state.loading
  }
}
export default connect(data,method)(Index);

