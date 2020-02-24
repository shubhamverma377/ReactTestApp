import React, { Component } from 'react'
import RegularComponet from './RegularComponet'
import PureCompt from './PureCompt'
import Raja from './images/Raja.jpg'

 

    
 class ParentComponent extends Component  {
       constructor(props){
           super(props)
           this.state = {
               name:'shubh'
           }
       }

 componentDidMount(){
     setInterval(() => {
                 this.setState({
                 name:'shubh'
                 })
     },2000)
 }
    
render(){
             console.log('Parent Component render***********')

    return (
     <div>
        <img src={Raja} width="500px" height="250px"/>
               <p> Pure Component</p>

       <RegularComponet name={this.state.name}/>
       <PureCompt name={this.state.name} />
      </div>
    )
  }
 }

 
export default ParentComponent