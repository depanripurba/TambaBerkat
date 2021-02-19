import React,{Fragment} from 'react'
import "./style.css"
import Gambar from "./fotocopy.jpg"

class Landing extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="rootHeader" >
                <div className="primaryroot" >
                    <div className="childsecondary" >
                        <span>Hubungi Kami</span>
                        <span><a href="" target="_blank">081310354312</a></span>
                    </div>
                    <div className="childsecondary1" >
                        <span><a href="" target="_blank">Blog</a></span>
                        <span><a href="" target="_blank">Bantuan</a></span>
                    </div>
                </div>
                <div className="secondroot" >
                    <div className="childsecondroot1" >
                       <div className="tes1">
                            <span>Tamba Berkat</span>
                            <span>Point Of Sale</span>
                            <span>Payments</span>
                            <span>Capital</span>
                       </div>
                       <div className="tes2" >
                          <center>Dapatkan Diskon untuk jumlah Fotocopy yang banyak </center>
                          <center>Dapat hasil print sesuai dengan harapan </center>
                          <center>Dapatkan Biaya Desain Gratis untuk Cetakan yang banyak</center>
                          <center className="button"> Mari Singgah di Toko Kami</center>
                       </div>
                    </div>
                    <div className="childsecondroot2" >
                        <div className="containerlog" >
                            <span>Login</span>
                            <span>Event</span>
                        </div>
                        <div className="containerlog1" >
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="rootheader2">
                <div className="anak1" >
                    <img className="gambar" src={Gambar} alt=""/>
                </div>
                <div className="anak2" >
                 
                        <p className="p1" >Moka Point Of Sale</p>
                        <p className="p2">Catatan anda berantakan ? </p>
                        <p className="p3">Aplikasi kasir moka menyederhakan proses penjualan usaha anda dan mengelola transaksi lebih efesien </p>
                        <p className="p4">Pelajari Lebih lanjut</p>
                </div>
                
            </div>
            <div className="rootheader3">
                <div className="anak1" >
                 
                        <p className="p1" >Moka Point Of Sale</p>
                        <p className="p2">Catatan anda berantakan ? </p>
                        <p className="p3">Aplikasi kasir moka menyederhakan proses penjualan usaha anda dan mengelola transaksi lebih efesien </p>
                        <p className="p4">Pelajari Lebih lanjut</p>
                </div>
                <div className="anak2" >
                    <img className="gambar" src={Gambar} alt=""/>
                </div>
            </div>
            <div className="rootheader4">
                <center><p>Cocok untuk berbagai jenis tipe-tipe bisnis</p></center>
            </div>
            </Fragment>
        )
    }
}

export default Landing;