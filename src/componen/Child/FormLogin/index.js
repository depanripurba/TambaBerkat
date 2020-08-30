import React from 'react'
import firebase from "../../../Config/Firebase"
import {ubahlogin} from '../../../Config/Redux'
import {connect} from 'react-redux'
import "./style.css"
class Index extends React.Component{
    state = {
        email:"",
        password: ""
    }
    componentDidMount(){
        
    }


    onchange = (e)=>{  
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onclick = (e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
            this.props.changelogin(true)
            console.log(this.props)
        }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        });
        console.log("hai everyone")
    }

    render(){
        return(
            <div className="bodycontainer">
            <div className="formcontainer" >
                <center>
                    <h1>Login Administrator</h1>
                </center>
                <table className="frmlogin" >
                    <tbody>
                        <tr>
                            <td>Email</td>
                        </tr>
                        <tr>
                        <td> <input name="email" onChange={(e)=>this.onchange(e)} className="inputbaru" type="text" placeholder="ketik disini.." /> </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                        </tr>
                        <tr>
                            <td><input name="password" onChange={(e)=>this.onchange(e)} className="inputbaru" type="password" placeholder="ketik disini.." /></td>
                        </tr>
                        <tr>
                            <td> <button onClick={(e)=>this.onclick(e)} className="btn btn-primary mt-3 mb-4" > Login </button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="childcontainer mt-5">
            <center>
                pada halaman ini anda harus login sebagai admin, dimana anda akan mengelola data-data yang akan ditampilkan oleh website ini
                <p>Anda yang login sebagai admin juga akan bisa berkomunikasi dengan client yang sedang mengakses website ini</p>
            </center>
            </div>
            </div>
        )
}
}
const method = (dispatch)=>{
  return{
    changelogin:(value)=>dispatch(ubahlogin(value)),
   
  }
}
const data = (state)=>{
  return{
    login : state.login,
  }
}
export default connect(data,method)(Index);