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
      <div className="me" >
       <div className="orangnya" > <img src="./tb.png" alt="logo" className="gambarlogo" /> </div>
       <div className="pesannya" > {this.props.datachat.hasil.pesan} </div>
       <Your waktu = {this.state} />
     </div>
      )
  }else{
    return (
      <div className="your" >
        <div className="pesanmu" >{this.props.datachat.hasil.pesan}</div>
        <div className="orangnya" > <img className="gambarlogo" src={intel} alt="user icon" /> 
        </div>
        <Me waktu = {this.state}/>
    </div>
    )
  }
 
 }
 }
export default Index;
