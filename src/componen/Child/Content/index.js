import React, { Fragment} from "react";
import Kotak from "../Box"
import KotakChatClient from "../KotakChatClient"
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import "./style.css"
class Index extends React.Component{
render(){
  return (
    <Fragment>
      <KotakChatClient />
      <center>
        <h2>Selamat Datang di Tamba Berkat</h2>
        <h3>Melayani</h3>
      </center>
          	<div className="kanan">
          				<Kotak judul="FOTOCOPY" bagian1="1 Sisi" bagian2="Timbal Balik" item1="Fotocopy A3" item2="Fotocopy A4/F4" harga1="Rp.500,-/lbr" harga2="Rp.200,-/lbr" harga3="Rp.1000,-/lbr" harga4="Rp.400,-/lbr" />
                  <Kotak judul="K.Surat" bagian1="1 Sisi" bagian2="Timbal Balik" item1="A3" item2="A4" harga1="relatif" harga2="relatif" harga3="realtif" harga4="relatif" />
          				<Kotak judul="PRINT" bagian1="Hitam putih" bagian2="Warna" item1="Print A3" item2="Print A4/F4" harga1="Rp.1000,-/lbr" harga2="Rp.500,-/lbr" harga3="Relatif Warnanya" harga4="Relatif Warnanya" />
          				<Kotak judul="JILID" bagian1="Biasa" bagian2="LUX" item1="Jilid A3" item2="Jilid A4" harga1="Relatif" harga2="Relatif" harga3="Rp.20.000,-/lbr" harga4="Rp.10.000,-/lbr" /> 
          				<Kotak judul="SPANDUK" bagian1="Desain" bagian2="Desain + Cetak" item1="Spanduk Besar" item2="Spanduk Kecil" harga1="Relatif" harga2="Relatif" harga3="Relatif" harga4="Relatif" />
          				<Kotak judul="SCAN" bagian1="Hanya Scan" bagian2="Scan + Print" item1="Scan A3" item2="Scan A4/F4" harga1="Rp.5000,-/lbr" harga2="Rp.2000,-/lbr" harga3="Rp.7000,-/lbr" harga4="Rp.3000.-/lbr" />
          				<Kotak judul="UNDANGAN" bagian1="U. Adat" bagian2="Jenis Lainnya" item1="Dengan Foto" item2="Tanpa Foto" harga1="Relatif" harga2="Relatif" harga3="Relatif" harga4="Relatif" />
          				<Kotak judul="LAMINATING" bagian1="Laminating A4" bagian2="Laminating F4" item1="1 lbr" item2="Lebih dari 10 lbr" harga1="Rp.4000,00-/lbr" harga2="Rp.3500,00-/lbr" harga3="Rp.4000,00-/lbr" harga4="Rp.3500,00-/lbr" />
            </div>
            <br/><br/>
           <center><NavLink className="bawah" to="/Atk">Atk</NavLink></center>
           <br/><br/>
    </Fragment>
	)
 }
}

const method = (dispatch)=>{
  return{

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
