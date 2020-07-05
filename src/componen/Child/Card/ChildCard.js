import "./Card.css"
import React,{Fragment} from "react";
import firebase from "../../../Config/Firebase"
const Index = (props)=>{


	return(
		<Fragment>
		<div className="card baru" style={{width:"18rem",margin:"10px"}} >
		<img src={props.cek} style={{width:"18rem"}} />
			<div className="card-body"> 
				<p className="card-text">Tipex</p>
				<p className="card-text">Harga : Rp. 6000</p>
			</div>
		</div>
		</Fragment>

		)
}
export default Index;
