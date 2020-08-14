import React from "react";
import "./style.css"
import Kotakpelanggan from '../Kotakpelanggan'
import {listuser} from '../../../Config/Redux'
import {connect} from 'react-redux'
import { FaPaperclip } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
class Index extends React.Component{
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
  		<div className="chatdenganpelanggan" >
  			<div className="namapelanggan antrian" >PELANGGAN1</div>
  			<div className="lischat" ></div>
  			<div className="komponenpengirim" >
  				<FaPaperclip className="clip paper" />
  				<input className="inputanadmin" name="pesanadmin" type="text" placeholder="Ketik disini.." />
  				<AiOutlineSend className="clip sender" />
  			</div>

  		</div>
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
  	daftaruser: state.listuser
  }
}
export default connect(data,method)(Index);

 
