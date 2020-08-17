import React from "react";
import Header from "../Child/Header"
import CCAdmin from "../Child/CCAdmin"
import Footer from "../Child/Footer"
class Index extends React.Component{
 
render(){
  return (
  	<div> 
   		<Header />
   		<CCAdmin />
   		<Footer />
   	</div>
  	)
  } 
}
export default Index;
