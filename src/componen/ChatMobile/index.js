import React, {Fragment} from 'react'
import firebase from '../../Config/Firebase'
import {Helmet} from "react-helmet"
import { FaTelegramPlane } from "react-icons/fa";
import "./style.css"
import gambar from "./tb.png"
class Index extends React.Component{

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
                        <div className="center-content" >
                            <div className="me-chat" >
                            hai 
                            </div>
                            <div className="your-chat" >
                                tidak ada memang kalau
                            </div>
                            <div className="me-chat" >
                            hai nama saya depanri purba adakan yang bisa saya bantu ? jika ada anda tidak perlu untuk sungkan katakan saja sejujurnya
                            </div>
                            <div className="your-chat" >
                            hai nama saya depanri purba adakan yang bisa saya bantu ? jika ada anda tidak perlu untuk sungkan katakan saja sejujurnya
                            </div>
                            <div className="me-chat" >
                            hai nama saya depanri purba adakan yang bisa saya bantu ? jika ada anda tidak perlu untuk sungkan katakan saja sejujurnya
                            </div>
                            <div className="me-chat" >
                            hai nama saya depanri purba adakan yang bisa saya bantu ? jika ada anda tidak perlu untuk sungkan katakan saja sejujurnya
                            </div>
                            <div className="me-chat" >
                            hai nama saya depanri purba adakan yang bisa saya bantu ? jika ada anda tidak perlu untuk sungkan katakan saja sejujurnya
                            </div>
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
export default Index