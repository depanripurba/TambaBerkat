import React from "react";
import './style.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";


class Index extends React.Component{
 
render(){
   return(
    	
    	/*<FaFacebookSquare fontSize="24" />*/
    	<div className="footer">
    	<div className="container pt-3 pb-3 mt-2" >
    		<div className="row">
    			<div className="col-sm-4" >
    			<table celspacing="10">
    				<tbody>
	    				<tr>
	    					<td className="tes"><FaFacebookSquare fontSize="18" fontColor="white" /></td>
	    					<td className="font tes">Tamba Berkat</td>
	    				</tr>
	    				<tr>
	    					<td className="tes"><FaPhoneAlt fontSize="18" fontColor="white" /></td>
	    					<td className="font tes">081 375 664 663</td>
	    				</tr>
	    				<tr>
	    					<td className="tes"><FaWhatsapp fontSize="18" fontColor="white" /></td>
	    					<td className="font tes">081 375 664 663</td>
	    				</tr>
	    				<tr>
	    					<td className="tes"><FaRegEnvelope fontSize="18" fontColor="white" /></td>
	    					<td className="font tes">gregotamba0512@gmail.com</td>
	    				</tr>
    				</tbody>
    			</table>
    			</div>
    			<div className="col-sm-4" >
	    			<table celspacing="10">
	    				<tbody>
		    				<tr>
		    					<td className="tes"><FaRegThumbsUp fontSize="18" fontColor="white" /></td>
		    					<td className="font tes">1234</td>
		    				</tr>
	    				</tbody>
	    			</table>
    			</div>
    			<div className="col-sm-4 tes" >Copyright @2020</div>
    		</div>

    	</div>
    	</div>

  )
}


}
export default Index;
