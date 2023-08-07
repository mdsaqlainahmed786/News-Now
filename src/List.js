import React, { Component } from "react"
import axios from "axios"
class List extends Component{
  constructor(props){
    super(props)
    this.state={
      list:[], 
      errormsg:""
    }
  }
  clickHandler = () =>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
   .then(response=>{
     console.log(response)
     this.setState({list:response.data})
   }).catch(error=>{
     console.log(error)
     this.setState({errormsg:"Something went wrong... "})
   })
  }
  render(){
    const { list, errormsg}=this.state
    return(
      <div>
   list of itmes:
     <br/>
     <br/>
   <button onClick={this.clickHandler}>Fetch</button>
      {
       list.length ? 
       list.map(item=><div key={item.id}>{item.title}</div>):
       null
      }
      {
        errormsg? <div>{errormsg}</div>:null
      }
      </div>
      )
  }
}
export default List