import React,{PureComponent} from 'react'
 

    
 class PureCompt extends PureComponent  {
     render(){
         console.log('PureComponent render***********')
    return (
     <div>
         PureComponent{this.props.name}
      </div>
    )
  }
 }

 
export default PureCompt