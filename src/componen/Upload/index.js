import React,{Fragment} from "react"
import firebase from "../../Config/Firebase"
import Example from "../Child/Progres"
import Header from "../Child/Header"
import {ubahprogres} from '../../Config/Redux'
import {connect} from 'react-redux'
import "./Upload.css"
class Index extends React.Component{
state = {
	file:"tes",
	progres:"jangan",
  namabarang:null,
  hargabarang:null,
  stok:null
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
 clear = ()=>{
  this.setState({
    namabarang:"",
    hargabarang:"",
    stok:""
  })
 }
 realtimedatabase = (e)=>{
    const database = firebase.database()

     database.ref('barang/').push({
          namabarang:this.state.namabarang,
          hargabarang:this.state.hargabarang,
          stok:this.state.stok,
          url:e
        })
  }
tes=(e,tes,database,clear)=>{
  e.preventDefault()
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
    console.log('File available at', downloadURL)
    database(downloadURL)
    clear()
  });
});
}

changevalue = (e)=>{
  console.log(e.target)
  this.setState({
    [e.target.name] : e.target.value
  })
  console.log(this.state)
}
  render(){
    return (
      <Fragment>
    <Header />
		<div className="container">
    <center> <h2> Selamat datang Admin. Silahkan input barang baru </h2> </center>
    <br/><br/>
    <div className="sampul" >
    <form>
      <table>
      <tbody>
        <tr>
         <td>Nama Barang </td> <td>:</td> <td><input value={this.state.namabarang} type="text" name="namabarang" placeholder="Masukkan nama barang" onChange={(e)=>this.changevalue(e)} required /></td>
        </tr>
        <tr>
         <td>Harga barang </td> <td>:</td> <td><input value={this.state.hargabarang} type="text" placeholder="Masukkan harga barang" name="hargabarang" onChange={(e)=>this.changevalue(e)} required /></td>
        </tr>
        <tr>
         <td>Jumlah stok </td> <td>:</td> <td><input value={this.state.stok} type="text" placeholder="Jumlah Stok" name="stok" onChange={(e)=>this.changevalue(e)} required /></td>
        </tr>
        <tr>
         <td>Gambar </td> <td>:</td> <td><input onChange={(e)=>this.change(e)} type="file" name="input" required/></td>
        </tr>
        </tbody>
      </table>
			<button onClick={(e)=>this.tes(e,this.props,this.realtimedatabase,this.clear)} className="btn btn-primary" >Upload</button>
			<Example  />
      </form>

    </div>
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
