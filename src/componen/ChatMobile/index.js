import React, {Fragment} from 'react'
import firebase from '../../Config/Firebase'
import {Helmet} from "react-helmet"
import { FaTelegramPlane } from "react-icons/fa";
import CChat from "../Child/CChat"
import ChildChatAdmin from "../Child/ChildChatAdmin"
import {updatechat} from '../../Config/Redux'
import "./style.css"
import {connect} from 'react-redux'
import gambar from "./tb.png"
class Index extends React.Component{
    componentDidMount(){
        this.props.upchat(null)
    }
    realtimedatabase = (e)=>{
        const database = firebase.database()
        let useridbaru = localStorage.getItem('user')
         database.ref('chat/' + useridbaru).push({
              id: "me",
              pesan: this.state.pesan,
              jam: new Date().getHours(),
              menit:new Date().getMinutes(),
              tanggal: new Date().getDate(),
              bulan: new Date().getMonth(),
              tahun: new Date().getFullYear()
            })
      }

      tes = (e)=>{
        let kotak = document.querySelector(".teskoneksi")
        console.log("ini adalah tinggi dari scrool dari load " + kotak.scrollHeight)
        kotak.scrollTo(1,kotak.scrollHeight)
      }

    change = (e)=>{
        this.setState({
            [e.target.name] :  e.target.value
          })
          e.target.style.height = "auto"
          e.target.style.height = e.target.scrollHeight + "px" 
      }


    clicked = (e)=>{
        if(e.key === 'Enter'){
        this.realtimedatabase()
        this.props.upchat(null)
        e.target.placeholder="ketik disini.."
        e.target.value = ""
        e.target.focus()
        e.target.style.height = "auto"
        e.preventDefault()
        } 
      }
    render(){ 
        return(
            <Fragment> 
            <Helmet>
                <title>Chat tes</title>
            </Helmet>
                <div className="containermobile" >
                    <div className="left-side" >
                       <div className="top-header" >
                            <div className="online" ><img className="logotb" src={gambar} alt="tamba berkat" /></div>
                            <div className="jarak" >Online</div>
                        </div>
                        <div className="center-content teskoneksi" onLoad={(e)=>this.tes(e)} >
                            <div className="me-chat" >
                            Selamat datang di forum tanya jawab, Adakah yang bisa kami bantu ?
                            </div>
                    {/* bagian untuk mmpolling data pesan dari firebase */}
                    { 
                        this.props.chat.map((result)=>{
                            return(<CChat datachat = {result} />)
                        })
                    }
                    {/* akhir dari polling pesan dari firebase */}

                        </div>
                        <div className="bottom-footer" >
                            <textarea rows="1" className="textarea" name="pesan" onChange={(e)=>this.change(e)} onKeyPress = {(e)=>this.clicked(e)}  placeholder="ketik disini" />
                           <div className="lingkaran" ><FaTelegramPlane /></div>
                        </div>
                    </div>
                     <div className="right-side" >
                       <h2>FORUM TANYA JAWAB</h2> 
                   </div>
                    
                </div>
            </Fragment>
        )
}
}

const method = (dispatch)=>{
    return{
      upchat:(value)=>dispatch(updatechat(value)),
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