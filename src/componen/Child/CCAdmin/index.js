import React from "react";
import "./style.css"
import Kotakpelanggan from '../Kotakpelanggan'
import Chatdenganpelanggan from '../Chatdenganpelanggan'
import {listuser} from '../../../Config/Redux'
import {connect} from 'react-redux'
class Index extends React.Component{
state={
	statuschat:false 
}
componentDidMount(){
	this.props.listeduser(null)
	console.log(this.props.daftaruser)
}


render(){
  return (
  	<div className="CCChat" >
  		<div className="daftarpelanggan" >
  			<div className="antrian" >ANTRIAN PELANGGAN</div>
  			<div className="daftarantrian" > 
 
  				 {
                  this.props.daftaruser.map((result)=>{
                    return(<Kotakpelanggan result={result} />)
                  })
                }

  			</div>
  		</div>
  		<Chatdenganpelanggan ready={this.state.statuschat} />
  	
  	</div>
  	)
  }
}
const method = (dispatch)=>{
  return{
    listeduser:(value)=>dispatch(listuser(value))
  }
}
const data = (state)=>{
  return{
  	daftaruser: state.listuser,
  	judulchat: state.judulchatadmin
  }
}
export default connect(data,method)(Index);

 
