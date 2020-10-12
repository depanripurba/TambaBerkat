import "./style.css"
import { connect } from "react-redux"
import React,{ Fragment } from 'react'
class Index extends React.Component{
  componentDidMount(){
    console.log(this.props.chat)
    console.log(this.props.oca)
  }
    render(){
        if(this.props.oca===true){
            return(
              <Fragment>
              <div>Hai nama saya depanri purba</div>
              <div>
              {
                this.props.chat.map((result)=>{
                  return(
                    <div className="bungkus-pesan">
                      {
                        result.hasil.pesan
                      }
                    </div>
                  )
                })
              }
              </div>
              </Fragment>
            )
        }else{
          return(
              <div className="pertama-load" >
              {
                console.log(this.props.oca)
              }
                  Selamat datang Admin tes koneksi jaringan
              </div>
              
          )
        }
}
} 
const method = (dispatch)=>{
    return{
  
    }
  }
  const data = (state)=>{
    return{
      login : state.login,
      useridyangasli : state.iduser,
      oca: state.onoffchatadmin,
      kontak : state.kontak,
      chat: state.listchatadmin
    }
  }
  export default connect(data,method)(Index);