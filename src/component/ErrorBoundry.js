import React, { Component } from 'react'
 
class ErrorBoundry extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    
    static getDrivedStateFromError(error){
        return{
            hasError:true
        }
        
    }
   
  render() {
     
    if(this.state.hasError){
        return  <h1>something went wrong</h1>
    }
      return this.props.children
  }
}
 
export default ErrorBoundry