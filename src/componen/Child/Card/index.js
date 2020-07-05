import React, {Fragment} from "react";
import firebase from "../../../Config/Firebase"
import ChildCard from "./ChildCard.js"
import {connect} from "react-redux"
const Index = (props)=>{
const tes = [1,2]

	return(
		<Fragment>
        {props.dataurl.map((result)=>{
            return( 
                <ChildCard cek = {result} />
                )
        })}
		</Fragment>
		)
}

const data = (state)=>{
  return{
    dataurl : state.urlimg
  }
}
export default connect(data,null)(Index);
