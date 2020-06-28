import React from 'react' 
import './App.css'
import './App.scss'
import Login from './components/Login'
import BlogDetails from './components/BlogDetails'
import Reg from "./components/Reg"
import {Dashboard1} from "./components/Dashboard1"
import UserList from "./components/UserList"
import BlogList from "./components/BlogList"
import UserDetails from "./components/UserDetails"
import Settings from "./components/Settings"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./bg.jpg" ;

function App() {
 
    return (
      <div class="stripe-6">
      <div className="container" style={{ "minHeight": "500px" }} > 
     <header><img style={{ "width": "100%" , "height": "100%" , "marginBottom":"5px"}} src={require('./bg.jpg')} />
     </header> 
          <Router>
              <Switch>
                  <Route exact path="/" component={Login}></Route>
                  <Route  path="/Reg" component={Reg}></Route>
                  <Route path="/Dashboard1" component={Dashboard1} ></Route>
                  <Route path="/Settings" component={Settings}></Route>
                  <Route path="/UserList" component={UserList}></Route>
                  <Route path="/BlogDetails" component={BlogDetails}></Route>
                  <Route path="/BlogList" component={BlogList}></Route>
                  <Route path="/UserDetails" component={UserDetails}></Route>
                  <Route  path="/Login" component={Login}></Route>
              </Switch>
          </Router>
        </div>
      </div>
    )
}
export default App; 