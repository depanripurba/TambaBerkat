import React from "react";
import "./style.css"
import Header from "../Child/Header"
import Card from "../Child/Card"
import Footer from "../Child/Footer"
import {connect} from "react-redux"
import {updatedatabarang} from '../../Config/Redux'
class Index extends React.Component{
componentDidMount(){
	this.props.upbarang()
}
  render(){
 
		if(this.props.loading === true){
				return (
    <div>
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

