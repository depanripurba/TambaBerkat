import React from "react";
import Header from "../Child/Header"
import Card from "../Child/Card"
import {connect} from "react-redux"
class Index extends React.Component{
componentDidMount(){
	console.log(this.props.dataurl)
}
  render(){
    return (
    	<div>
		<Header />
		<div className="container">
		{
			console.log(this.props.dataurl)
		}
		<Card />
		</div>
		</div>
    )
}
}

const data = (state)=>{
  return{
    dataurl : state.urlimg
  }
}
export default connect(data,null)(Index);

