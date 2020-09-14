import React from "react"
import "./style.css"
import intel from "./icon.png"
import Me from "../Waktu1/Me"	
import Your from "../Waktu1/Your"	
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
if(this.props.datachat.hasil.id === 'me'){
return(
    	<div className="gudangchat">
    		<div className="a"> <img className="gambarlogo" src={intel} alt="icon user" /> </div>
    		<div className="ba">
    			{
    				this.props.datachat.hasil.pesan
    			}
    		</div> 
			<Your waktu = {this.state} />
    	</div> 
    	) 

}else{
	return(
    	<div className="gudangchatyou">
    		<div className="b">
    			{
    				this.props.datachat.hasil.pesan
    			}
    		</div>
    		<div className="a"><img className="gambarlogo" src="./tb.png" /> </div>
			<Me waktu = {this.state} />
    	</div>
    	)
}


    
 }
 }
export default Index;
