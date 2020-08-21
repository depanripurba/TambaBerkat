import React from 'react'
import firebase from '../../../Config/Firebase'
import ScrollToBottom from 'react-scroll-to-bottom'
import Draggable from 'react-draggable'
import { AiFillCloseSquare } from "react-icons/ai"
import { FaPaperclip } from "react-icons/fa"
import { AiOutlineSend } from "react-icons/ai"
import CChat from "../CChat"
import {updatechat} from '../../../Config/Redux'
import {tampilkankotakchat} from '../../../Config/Redux'
import {AiFillWechat} from 'react-icons/ai'
import {connect} from 'react-redux'
// stylenya ada di komponen utamanya
class Index extends React.Component{
state={
    pesan:""
}

realtimedatabase = (e)=>{
    const database = firebase.database()
    let useridbaru = localStorage.getItem('user')
     database.ref('chat/' + useridbaru).push({
          id: "me",
          pesan: this.state.pesan
        })
  }

change = (e)=>{
  this.setState({
      [e.target.name] :  e.target.value
    })
    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px" 
}
// akhir dari bagian update state
// bagian untuk menampilkan dan menutup kotak
tampilkan = ()=>{
    if(this.props.kotak === true){
        this.props.kotakchat(false)
    }else{
        this.props.kotakchat(true)
    }
    
}

// akhir dari bagian untuk menampilkan kotak
  clicked = (e)=>{
    if(e.key === 'Enter'){
    this.realtimedatabase()
    this.props.upchat(null)
    e.target.placeholder="ketik disini.."
    e.target.value = ""
    e.target.focus()
    e.target.style.height = "auto"
    e.preventDefault()
    console.log(e.target)
    }
  }


    render(){

    if(this.props.kotak === true){
        return(
        <Draggable>
  			<div className="Kiri">
            <div className="kirisatu cek">
              <div>TANYA KAMI</div>
              <div className="close">
                <AiFillCloseSquare onClick={this.tampilkan} />
              </div>
            </div>
            <div className="kirisatu kasihpadding">
                <ScrollToBottom>
                   <div className="me" >
                      <div className="orangnya" > <img className="gambarlogo" src="./tb.png" alt="logo" /> </div>
                      <div className="pesannya" > Selamat datang di tamba berkat, ada yang bisa kami bantu </div>
                    </div>
                {
                  this.props.chat.map((result)=>{
                    return(<CChat datachat = {result} />)
                  })
                }
                </ScrollToBottom>
            </div>
            <div className="kirisatu bagianinput">
              <div className="meratakan add"><FaPaperclip className="kirim" /></div>
              <div className="meratakan"><textarea rows="1" className="textarea" name="pesan" onChange={(e)=>this.change(e)} onKeyPress = {(e)=>this.clicked(e)}  placeholder="ketik disini" />
              </div>
              <div className="meratakan" ><AiOutlineSend className="kirim" /></div>
            </div>
 
  			</div>
        </Draggable>
        )
        }else{
            return(
                <div className="tombolchat" ><AiFillWechat onClick={this.tampilkan} /></div>
            )
        }
        
}
}
const method = (dispatch)=>{
  return{
    upchat:(value)=>dispatch(updatechat(value)),
    kotakchat:(value)=>dispatch(tampilkankotakchat(value)),
  }
}
const data = (state)=>{
  return{
    login : state.login,
    useridyangasli : state.iduser,
    kontak : state.kontak,
    chat: state.chat,
    kotak: state.kotakchat
  }
}
export default connect(data,method)(Index);
