import React from "react";
import "./style.css"
class Index extends React.Component{
 
render(){
  return (
  	<div className="CCChat" >
  		<div className="daftarpelanggan" >
  			<div className="antrian" >ANTRIAN PELANGGAN</div>
  			<div className="daftarantrian" ></div>
  		</div>
  		<div className="chatdenganpelanggan" >
  			<div className="namapelanggan antrian" >PELANGGAN1</div>
  			<div className="lischat" ></div>
  		</div>
  	</div>
  	)
  }
}
export default Index;
