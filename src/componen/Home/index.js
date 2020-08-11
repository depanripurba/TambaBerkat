import React from "react";
import Header from "../Child/Header"
import Card from "../Child/Card"
import Footer from "../Child/Footer"
import {connect} from "react-redux"
import {updatedatabarang} from '../../Config/Redux'
class Index extends React.Component{
componentDidMount(){
	this.props.upbarang()
	console.log("hai nama saya depanri purba, senang bertemu dengan kalian semua kawan kawan")
}
  render(){
    return (
    	<div>
		<Header />
		<div className="container">
		<div className ="row">
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
}
}

 const method = (dispatch)=>{
  return{
    upbarang:(value)=>dispatch(updatedatabarang(value)),
  }
}
 
const data = (state)=>{
  return{
    barang : state.barang
  }
}
export default connect(data,method)(Index);

