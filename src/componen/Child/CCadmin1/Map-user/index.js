import React,{ Fragment } from 'react'
import tb from "../user.png"
import {updatelistchatadmin} from '../../../../Config/Redux'
import {upoca} from '../../../../Config/Redux'
import {connect} from 'react-redux'
class Index extends React.Component{
    componentDidMount(){
    }
    kliked=(e)=>{
        let user = e.target.id
        this.props.upchat(user)
        this.props.upoca()
        console.log(user)
       
    }
    render(){
        return(
            <Fragment>
                <div onClick={(e)=>this.kliked(e)} id={this.props.datachat} className="daftar-user-client" >
                    <div className="icon-centering" id={this.props.datachat}>
                        <img className="user-icon" src={tb} id={this.props.datachat} />
                    </div>
                    <div id={this.props.datachat} className="container-bagian-label" >
                        {this.props.datachat}<br/>
                        Selamat datang di simulasi
                    </div>
                </div>
            </Fragment>
        )
}
}

const method = (dispatch)=>{
    return{
     upchat:(value)=>dispatch(updatelistchatadmin(value)),
     upoca:()=>dispatch(upoca())
    }
  }
  const data = (state)=>{
    return{
        chat: state.listchatadmin,
        judulchat: state.judulchatadmin
    }
  }
  export default connect(data,method)(Index);
