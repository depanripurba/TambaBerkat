import React from "react";
import { FaPaperclip } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import ChildChatAdmin from "../ChildChatAdmin"
import {connect} from 'react-redux'
class Index extends React.Component{
	state={
		pesan:''
	}
// awal dari realtime database
realtimedatabase = (e)=>{
    const database = firebase.database()
    let useridbaru = localStorage.getItem('user')
     database.ref('chat/' + useridbaru).push({
          id: "me",
          pesan: this.state.pesan
        })
  }
// akhir dari realtime database

	keypres=()=>{
	    if(e.key === 'Enter'){
	    console.log('anda sudah menekan tombol enter' + this.props.useridyangasli)
	    this.realtimedatabase()
	    this.props.upchat(null)
	    }
	}

	change=()=>{
		
	}
render(){
  if(this.props.statuschat === true){
  	return (
	  	<div className="chatdenganpelanggan" >
	  			<div className="namapelanggan antrian" > {this.props.judulchat} </div>
	  			<div className="lischat" >
	  				{
		                  this.props.chatuserdenganadmin.map((result)=>{
		                    return(<ChildChatAdmin datachat = {result} />)
		                  })
               		 }
	  			</div>
	  			<div className="komponenpengirim" >
	  				<FaPaperclip className="clip paper" />
	  				<input onChange={this.change}  className="inputanadmin" name="pesanadmin" type="text" placeholder="Ketik disini.." />
	  				<AiOutlineSend className="clip sender" />
	  			</div>
	  	</div>
  	)

 }else{
 	return(
 		<div className="chatdenganpelanggan"><center><h3>Selamat datang Admin</h3></center></div>
 		)
 }


 }
 }
  
const method = (dispatch)=>{
  return{
  }
}
const data = (state)=>{
  return{
  	judulchat: state.judulchatadmin,
  	statuschat: state.statuschatadmin,
  	chatuserdenganadmin: state.listchatadmin
  }
}
export default connect(data,method)(Index);
