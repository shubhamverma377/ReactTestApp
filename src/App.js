import React ,{ Component } from 'react'
import logo from './logo.svg'
import './App.css'
//import FunctionClick from './component/FunctionClick'
//import EventBind from './component/EventBind'
//import UserGreeting from './component/UserGreeting'
//import PersonList from './component/PersonList'
//import StyleSheet from './component/StyleSheet'
//import Inline from './component/Inline'
//import Form from './component/Form'
//import Greet from './component/Greet'

//import FragmentDemo from './component/FragmentDemo'
//import Table from './component/Table'
//import './appStyles.css'
//import style from './appStyle.module.css'
//import PureCompt from './component/PureCompt'
//import ParentComponent from './component/ParentComponent'
//import RefsDemo from './component/RefsDemo'
//import PortalsDemo from './component/PortalsDemo'
//import Hero from './component/Hero'
//import ErrorBoundry from './component/ErrorBoundry'
//import ClickCounter from './gitcomponent/ClickCounter'
//import HoverCounter from './component/HoverCounter'

 
//  class App extends React.Component {
// render(){
//   return (
//     <div className="App">
// {/*<h1 className='error'>error</h1>
//       <h1 className={style.success}>success</h1>*/}
//       <Form />
//       {/*<Greet/>*}
//       {/*<FragmentDemo />*/}
//      { /*<Table />*/}
//       {/*<Inline />*/}
//       {/*<StyleSheet primary={true}/>*/}
//       {/*<PureCompt  />*/}
//      {/*<ParentComponent />*/}
//       {/*<RefsDemo /*}>
//       {/*<PortalsDemo />*/}
//      {/* <ErrorBoundry>
//       <Hero heroName="SuperMan"></Hero>
//       <Hero heroName="BatMan"></Hero>
//       <Hero heroName="Joker"></Hero>
//       </ErrorBoundry>*/}
      
//        {/*<ClickCounter />*/}
//       {/*<HoverCounter />*/}
//       {/*<PostList  />*/}
      
//     {/*<EventBind /> */}
//       {/* <UserGreeting/>*/}
//       {/*<PersonList />*/}
//         </div>
//     )
//   }
// }
class App extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      
      fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);

          console.log("APR" +this.state.apiResponse)
  }

  componentDidMount() {
      this.callAPI();

      console.log("APR" +this.state.apiResponse)
      
  }

  render() {
      console.log("ABS" +this.state.apiResponse)
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">{this.state.apiResponse}</p>
          </div>
      );
  }
}
 
export default App;
