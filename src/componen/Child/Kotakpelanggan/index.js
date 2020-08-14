import React from "react";
class Index extends React.Component{

clicked = ()=>{
	console.log("anda sedang mengklik tombol yang sedang disediakan")
}


render(){
    return (
    	<div className="kotakpelanggan" onClick={this.clicked} > {this.props.result} </div>
    	)
 }
}
export default Index;
