import React, {Fragment} from 'react'
import {Helmet} from "react-helmet"
import "./style.css"
class Index extends React.Component{
    render(){
        return(
            <Fragment>
            <Helmet>
                <title>Chat tes</title>
            </Helmet>
                <div className="containermobile" >
                    <div className="left-side" >
                        tes ini adalah percobaan tampilan
                    </div>
                     <div className="right-side" >
                        ini adalah percobaan tampilan dua
                   </div>
                    
                </div>
            </Fragment>
        )
}
}
export default Index