import React from 'react'
import { Link } from "react-router-dom"
import {updatechat} from '../../../Config/Redux'
import {tampilkankotakchat} from '../../../Config/Redux'
import {AiFillWechat} from 'react-icons/ai'
import {connect} from 'react-redux'
// stylenya ada di komponen utamanya
class Index extends React.Component{
    render(){
            return(
               <Link to="/Chatmobile"><div className="tombolchat" ><AiFillWechat onClick={this.tampilkan} /></div></Link> 
            )
        
}
}
const method = (dispatch)=>{
  return{
    upchat:(value)=>dispatch(updatechat(value)),
    kotakchat:(value)=>dispatch(tampilkankotakchat(value)),
  }
}
const data = (state)=>{
  return{
    login : state.login,
    useridyangasli : state.iduser,
    kontak : state.kontak,
    chat: state.chat,
    kotak: state.kotakchat
  }
}
export default connect(data,method)(Index);

// <Draggable>
  			
//         </Draggable>
