import React,{Component} from 'react'
 

    
 class RefsDemo extends Component  {
     constructor(props){
           super(props)
           this.inputRef=React.createRef()
       }

 componentDidMount(){
     this.inputRef.current.focus()
     console.log('Regular Component render***********')

     
 }
     clickHandler = () =>{
     alert(this.inputRef.current.value)
     }
     render(){
             console.log('Regular Component render***********')

    return (
     <div>
      <input type="text" ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
        
         </div>
    )
  }
 }

 
export default RefsDemo