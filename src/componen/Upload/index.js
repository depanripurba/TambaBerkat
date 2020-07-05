import React,{Fragment} from "react"
import firebase from "../../Config/Firebase"
import Example from "../Child/Progres"
import Header from "../Child/Header"
import Form from "./Form.js"
import {ubahprogres} from '../../Config/Redux'
import {connect} from 'react-redux'
class Index extends React.Component{
state = {
	file:"tes",
	progres:"jangan"
}
 change=(e)=>{
 	const file = e.target.files[0]
 	this.setState({
 		file:file
 	})
 }
 componentDidMount(){
 	console.log("this is Component")
 	console.log(this.state.file)
 	console.log(firebase.storage)
 	console.log(this.state.progres)
 	console.log(this.props)
 }
 tampilkanloading=function(){
  console.log("ini adalah function untuk menampilkan loading halaman website")
 }
tes=(tes)=>{
	const storageRef = firebase.storage().ref("gambar");
	const uploadTask = storageRef.child(this.state.file.name).put(this.state.file);
  uploadTask.on('state_changed', function(snapshot){
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  let value = Math.round(progress)
  tes.changeprogres(value)
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  
}, function() {
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
  });
});
}
  render(){
    return (
      <Fragment>
    <Header />
		<div className="container">
    <br/><br/><br/><br/>
    <center>
			<input onChange={(e)=>this.change(e)} type="file" name="input"/>
			<button onClick={()=>this.tes(this.props)} >Upload</button>
			<Example  />
      </center>
      <Form />
      
		</div>
    </Fragment>
    )
 }
 }

 const method = (dispatch)=>{
  return{
    changeprogres:(value)=>dispatch(ubahprogres(value)),
  }
}
const data = (state)=>{
  return{
    progres : state.progres
  }
}
export default connect(data,method)(Index);
