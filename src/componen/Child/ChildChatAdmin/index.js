import React from "react";
import "./style.css"
class Index extends React.Component{
 
render(){
if(this.props.datachat.hasil.id === 'me'){
return(
    	<div className="gudangchat">
    		<div className="a">you</div>
    		<div className="b">
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
    		<div className="a">you</div>
    	</div>
    	)
}


    
 }
 }
export default Index;
