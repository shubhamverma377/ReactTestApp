import React, { Component } from 'react'
 
class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state={
            isLogIn:true
        }
    }
   
  render() {
      //let message
//        if(this.state.isLogIn){
//                return <div>Welcome shubh</div>
//     
//    }else{
//        return <div>Welcome Guest</div>
//    
//    }
//      if(this.state.isLogIn){
//           message = <div>Welcome shubh</div>
//      }else{
//    message = <div>Welcome Guest</div>
//    
//    }
//      return <div>{message}</div>  
      
      return this.state.isLogIn ? (
          <div>welcome shubh</div>
      ):(
                    <div>welcome Guest</div>

      )
  }
}
 
export default UserGreeting