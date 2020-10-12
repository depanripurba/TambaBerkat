import React,{Fragment} from "react";
import "./style.css"
import Mytes from "./Pesan"
import {Helmet} from "react-helmet"
import Mapuser from "./Map-user"
import {listuser} from '../../../Config/Redux'
import {connect} from 'react-redux'
class Index extends React.Component{
state={
	statuschat:false 
} 
componentDidMount(){
	this.props.listeduser(null)
	console.log(this.props.daftaruser)
}
 

render(){
  return (
    <Fragment> 
    <Helmet>
        <title>Admin chat</title>
    </Helmet>
        <div className="container-admin" >
            <div className="sisi-kiri" >
                    <div className="judul-chat-admin" >
                        DAFTAR CLIENT
                        <hr/>
                    </div>
                    <div className="container-tes" >
                        <div className="bagian-map-chat" >
                        { 
                          this.props.daftaruser.map((result)=>{
                            return(<Mapuser datachat = {result} />)
                          })
                        }
                            
                        </div>
                        </div>
            </div>

            <div className="sisi-kanan" >
                  <Mytes />
            </div>
        </div>
    </Fragment>

  	)
  }
}
const method = (dispatch)=>{
  return{
    listeduser:(value)=>dispatch(listuser(value))
  }
}
const data = (state)=>{
  return{
  	daftaruser: state.listuser,
  	judulchat: state.judulchatadmin
  }
}
export default connect(data,method)(Index);

 
