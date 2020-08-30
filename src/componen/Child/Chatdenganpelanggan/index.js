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
	componentDidMount(){

	}
// awal dari realtime database
realtimedatabase = ()=>{
    const database = firebase.database()
    let useridbaru = this.props.judulchat
     database.ref('chat/' + useridbaru).push({
          id: "your",
          pesan: this.state.pesan,
          jam: new Date().getHours(),
          menit:new Date().getMinutes(),
          tanggal: new Date().getDate(),
					bulan: new Date().getMonth(),
          tahun: new Date().getFullYear()
        })
  }
// akhir dari realtime database
	tes=(e)=>{
		let cek = document.querySelector(".lischat")
		cek.scrollTo(1,cek.scrollHeight)
	}
	keypres=(e)=>{
			
	    if(e.key === 'Enter'){
	    e.preventDefault()
			e.target.value=""
			e.target.style.height="auto"
			e.target.placeholder="Ketik disini.."
	    this.realtimedatabase()
	    } 
	}

	change=(e)=>{
		this.setState({
			[e.target.name] : e.target.value
		})
		e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
	}
render(){
  if(this.props.statuschat === true){
  	return (
	  	<div className="chatdenganpelanggan" >
	  			<div className="namapelanggan antrian" > {this.props.judulchat} </div>
	  			<div className="lischat" onLoad={(e)=>this.tes(e)} >
					
	  				{
		                  this.props.chatuserdenganadmin.map((result)=>{
		                    return(<ChildChatAdmin datachat = {result} />)
		                  })
               		 }
	
	  			</div>
					<div className="bagianpengiriman">
						<div><FaPaperclip className="clip paper" /></div>
						<div><textarea className="textarea" rows="1" onChange={(e)=>this.change(e)} onKeyPress={(e)=>this.keypres(e)} name="pesan" placeholder="Ketik disini.." /></div>
						<div><AiOutlineSend className="clip sender" /></div>
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
