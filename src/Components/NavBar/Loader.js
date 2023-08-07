import React, { Component } from "react"
import "../NewsItems/Newsdisplay.css"
class Spinner extends Component{
  render(){
    return(
     <div className="ring">Loading<span className="spinner"></span>
            </div>
      )
  }
}
export default Spinner