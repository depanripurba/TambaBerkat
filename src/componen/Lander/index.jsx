import React,{Fragment} from 'react'
import "./style.css"

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
            <div>
                <div>

                </div>
                <div>
                    <span>Tamba Berkat</span>
                    <span>Merek Foto Copy yang kami gunakan </span>
                    <span>Foto copy yang kami gunakan adalah fotocopy canon dimana fotocopy ini adalah fotocopy dengan kualitas yang bagus </span>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Landing;