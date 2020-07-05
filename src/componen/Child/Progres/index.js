import React from 'react';
import { Progress } from 'reactstrap';
import {connect} from 'react-redux'
const Example = (props) => {
if(props.progres === 100){
	return(
	<div className="container">
    <div>
      <div className="text-center"> Upload Berhasil </div>
    </div>
    </div>
		)
}else{
	return (
  	<div className="container">
    <div>
      <div className="text-center"> {props.progres} </div>
      <Progress value={props.progres} />
    </div>
    </div>
  );
};
}
  
const data = (state)=>{
  return{
    progres : state.progres
  }
}
export default connect(data,null)(Example);
