import React,{Fragment} from "react";
import "./style.css"
import Mytes from "./Pesan"
import {Helmet} from "react-helmet"
import { FaTelegramPlane } from "react-icons/fa";
import Kotakpelanggan from '../Kotakpelanggan'
import Chatdenganpelanggan from '../Chatdenganpelanggan'
import {listuser} from '../../../Config/Redux'
import {connect} from 'react-redux'
import tb from "./user.png"
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
    <Fragment> 
    <Helmet>
        <title>Admin chat</title>
    </Helmet>
        <div className="container-admin" >
            <div className="sisi-kiri" >
                    <div className="judul-chat-admin" >
                        DAFTAR CLIENT
                        <hr/>
                    </div>
                    <div className="container-tes" >
                        <div className="bagian-map-chat" >
                            <div className="daftar-user-client" >
                                <div><img className="user-icon" src={tb} /></div>
                                <div></div>DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                            <div className="daftar-user-client" >
                                DEPANRI PURBA
                                <p>Selamat datang di simulasi</p>
                            </div>
                        </div>
                        </div>
            </div>

            <div className="sisi-kanan" >
                 <Mytes />
            </div>
        </div>
    </Fragment>

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

 
