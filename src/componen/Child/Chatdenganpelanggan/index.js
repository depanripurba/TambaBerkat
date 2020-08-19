import React from "react";
import "./style.css"
import { FaPaperclip } from "react-icons/fa"
import { AiOutlineSend } from "react-icons/ai"
import ChildChatAdmin from "../ChildChatAdmin"
import firebase from "../../../Config/Firebase"
import {connect} from 'react-redux'
class Index extends React.Component{
	state={
		pesan:''
	}
// awal dari realtime database
realtimedatabase = ()=>{
    const database = firebase.database()
    let useridbaru = this.props.judulchat
     database.ref('chat/' + useridbaru).push({
          id: "your",
          pesan: this.state.pesan
        })
  }
// akhir dari realtime database

	keypres=(e)=>{
	    if(e.key === 'Enter'){
	    console.log('anda sudah menekan tombol enter' + this.props.useridyangasli)
	    this.realtimedatabase()
	    }
	}

	change=(e)=>{
		this.setState({
			[e.target.name] : e.target.value
		})
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
						<textarea onChange={(e)=>this.change(e)} onKeyPress={(e)=>this.keypres(e)} name="pesan" type="text" placeholder="Ketik disini.." ></textarea>
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
