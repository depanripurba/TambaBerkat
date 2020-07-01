import React from "react";
class Index extends React.Component{
state = {
	file:"tes"
}
 change=(e)=>{
 	console.log(e.target.files[0])
 	this.setState({
 		file:"nama"
 	})
 }
 componentDidMount(){
 	console.log("this is Component")
 	console.log(this.state.file)
 }
tes=()=>{
	console.log("ini adalah tes")
}
  render(){
    return (
		<div>
			<input onChange={(e)=>this.change(e)} type="file" name="input"/>
			<button onClick={this.tes} >Upload</button>
		</div>
    )
 }
 }
export default Index;
