import React from "react"
import "./style.css"
import { FaUserCircle } from "react-icons/fa";
class Index extends React.Component{
 
render(){
if(this.props.datachat.hasil.id === 'me'){
return(
    	<div className="gudangchat">
    		<div className="a"><FaUserCircle /></div>
    		<div className="ba">
    			{
    				this.props.datachat.hasil.pesan
    			}
    		</div>
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
    	</div>
    	)
}


    
 }
 }
export default Index;
