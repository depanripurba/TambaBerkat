import React from "react";
import intel from "../ChildChatAdmin/icon.png"
import Me from "../Waktu/Me"	
import Your from "../Waktu/Your"
import "./style.css"
class Index extends React.Component{
state = {
  jam: "",
  menit:"",
  tanggal:"",
  tahun:""
}
componentDidMount(){
  this.setState({
    jam: this.props.datachat.hasil.jam,
    menit: this.props.datachat.hasil.menit,
    tanggal: this.props.datachat.hasil.tanggal,
    bulan: this.props.datachat.hasil.bulan,
    tahun: this.props.datachat.hasil.tahun
  })  
}
render(){
  if(this.props.datachat.hasil.id === 'your'){
    return(
      <div className="me-chat" >
       <img src="./tb.png" alt="logo" className="gambarlogotes" />
        {this.props.datachat.hasil.pesan} 
       <Your waktu = {this.state} />
     </div>
      )
  }else{
    return (
      <div className="your-chat" >
        {this.props.datachat.hasil.pesan}
        <img className="gambarlogotes" src={intel} alt="user icon" /> 
        <Me waktu = {this.state}/>
    </div>
    )
  }
 
 }
 }
export default Index;
