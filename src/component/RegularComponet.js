import React,{Component} from 'react'
 

    
 class RegularComponet extends Component  {
     render(){
             console.log('Regular Component render***********')

    return (
     <div>
        <h2>
        Regular Component{this.props.name}
        </h2>
      </div>
    )
  }
 }

 
export default RegularComponet