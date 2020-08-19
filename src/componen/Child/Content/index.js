import React, { Fragment} from "react";
import Kotak from "../Box"
import CChat from "../CChat"
import Draggable from 'react-draggable';
import firebase from '../../../Config/Firebase'
import {NavLink} from "react-router-dom"
import { FaPaperclip } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import {updatechat} from '../../../Config/Redux'
import {connect} from 'react-redux'
import {AiFillWechat} from 'react-icons/ai'
import "./style.css"
class Index extends React.Component{

  state = {
    pesan:'',
    useridbaru:''
  }
  componentDidMount(){
    console.log(this.state.useridbaru)
  }
  // bagian upload ke realtime database firebase
    realtimedatabase = (e)=>{
    const database = firebase.database()
    let useridbaru = localStorage.getItem('user')
     database.ref('chat/' + useridbaru).push({
          id: "me",
          pesan: this.state.pesan
        })
  }
  // akhir bagian upload ke realtime database

// bagian untuk mengupdate state

change = (e)=>{
  this.setState({
      [e.target.name] :  e.target.value
    })
    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px" 
    console.log(e.target.style.height)
    console.log("ini adalah scrool height" + e.target.scrollHeight)
}
// akhir dari bagian update state
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
  return (
    <Fragment>
      <div className="tombolchat" ><AiFillWechat /></div>
      <Draggable>
  			<div className="Kiri">
            <div className="kirisatu cek">
              TANYA KAMI
            </div>
            <div className="kirisatu kasihpadding">
                   <div className="me" >
                      <div className="orangnya" > <img className="gambarlogo" src="./tb.png" alt="logo" /> </div>
                      <div className="pesannya" > Selamat datang di tamba berkat, ada yang bisa kami bantu </div>
                    </div>
                {
                  this.props.chat.map((result)=>{
                    return(<CChat datachat = {result} />)
                  })
                }
            </div>
            <div className="kirisatu bagianinput">
              <div className="meratakan add"><FaPaperclip className="kirim" /></div>
              <div className="meratakan"><textarea rows="1" className="textarea" name="pesan" onChange={(e)=>this.change(e)} onKeyPress = {(e)=>this.clicked(e)}  placeholder="ketik disini" />
              </div>
              <div className="meratakan" ><AiOutlineSend className="kirim" /></div>
            </div>

  			</div>
        </Draggable>
  		<div className="Konten">
          <div className="bungkusKanan">
            <div className="Judul">
                <h3>Selamat Datang di Tamba Berkat</h3>
                <center><h4>Melayani : </h4></center>
            </div>
          	<div className="Kanan">
          				<Kotak judul="FOTOCOPY" bagian1="1 Sisi" bagian2="Timbal Balik" item1="Fotocopy A3" item2="Fotocopy A4/F4" harga1="Rp.500,-/lbr" harga2="Rp.200,-/lbr" harga3="Rp.1000,-/lbr" harga4="Rp.400,-/lbr" />
          				<Kotak judul="PRINT" bagian1="Hitam putih" bagian2="Warna" item1="Print A3" item2="Print A4/F4" harga1="Rp.1000,-/lbr" harga2="Rp.500,-/lbr" harga3="Relatif Warnanya" harga4="Relatif Warnanya" />
          				<Kotak judul="JILID" bagian1="Biasa" bagian2="LUX" item1="Jilid A3" item2="Jilid A4" harga1="Rp.8000,-/lbr" harga2="Rp.5000,-/lbr" harga3="Rp.20.000,-/lbr" harga4="Rp.10.000,-/lbr" /> 
          				<Kotak judul="SPANDUK" bagian1="Desain" bagian2="Desain + Cetak" item1="Spanduk Besar" item2="Spanduk Kecil" harga1="Relatif" harga2="Relatif" harga3="Relatif" harga4="Relatif" />
          				<Kotak judul="SCAN" bagian1="Hanya Scan" bagian2="Scan + Print" item1="Scan A3" item2="Scan A4/F4" harga1="Rp.5000,-/lbr" harga2="Rp.2000,-/lbr" harga3="Rp.7000,-/lbr" harga4="Rp.3000.-/lbr" />
          				<Kotak judul="UNDANGAN" bagian1="U. Adat" bagian2="Jenis Lainnya" item1="Dengan Foto" item2="Tanpa Foto" harga1="Relatif" harga2="Relatif" harga3="Relatif" harga4="Relatif" />
          				<Kotak judul="LAMINATING" bagian1="Laminating A4" bagian2="Laminating F4" item1="1 lbr" item2="Lebih dari 10 lbr" harga1="Rp.4000,00-/lbr" harga2="Rp.3500,00-/lbr" harga3="Rp.4000,00-/lbr" harga4="Rp.3500,00-/lbr" />
            </div>
            <div className="bawah"><NavLink className="Atk" to="/Atk">Atk</NavLink></div>
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
    chat: state.chat
  }
}
export default connect(data,method)(Index);
