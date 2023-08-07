import React, { Component } from "react"
import { Link } from "react-router-dom"
class NavBar extends Component{
  render(){
    return(
      <>
      <div className="Nav">
   <Link to="/general" ><h5 className="navitems">Home</h5></Link>
   <Link to="/health" ><h5 className="navitems1">Health</h5></Link>
    <Link to="/business" ><h5 className="navitems2">Business</h5></Link>
    <Link to="/science" ><h5 className="navitems3">Science</h5></Link>
    <Link to="/sports" ><h5 className="navitems4">Sports</h5></Link>
    <Link to="/technology" ><h5 className="navitems5">Technology</h5></Link>
      </div>
     <h2 style={{textAlign:"center"}}>News Now-Top Headlines</h2>
     {/*     */}
    </>
    )
  }
}
export default NavBar
