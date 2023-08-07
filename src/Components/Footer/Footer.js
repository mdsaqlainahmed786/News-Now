import React, { Component } from "react"
import "./Footer.css"
class Footer extends Component{
  render(){
    return(
      <>
   <p style={{ textAlign: 'center' }}>
              <b>You've Caught up with everything..</b>
            </p>
    <h6 className="disclaimer">This Site does not claim any responsibility of errors in articles or inaccurate information™</h6>
    <div className="partners">
    <h3 className="title" style={{paddingTop:"10px"}}>Our Partners</h3>
    <div className="leftdiv">
    <h5 className="list">NDTV</h5>  
    <h5 className="list">Hindustan Times</h5>
      <h5 className="list">4Tv</h5>
      <h5 className="list">Etv</h5>
    </div>
    <div className="rightdiv">
    <h5 className="list">Aaj tak</h5>  
    <h5 className="list">Times now</h5>
    <h5 className="list">The Hindu</h5>
    <h5 className="list">Siasat</h5>
    </div>
    </div>
    <h5 className="endup">All Rights Reserved©</h5>
    </>
      
      )
  }
}
export default Footer
