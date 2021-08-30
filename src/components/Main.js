import React from "react"
import axios from "axios"
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Company from "./Company"
import Location from "./Location"
import Stock from "./Stock"
import NewLocation from "./NewLocation"
import Test from "./Test"
// Maybe just delete the stock link and make it apart of location
function Main() {
  return(
    <div>
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {localStorage.jwt !== undefined ? <Redirect from="/login" to="/"/> :<Route exact path="/login" component={Login}></Route>}
          <Route exact path="/test" component={Test}></Route>
          {localStorage.jwt !== undefined ? <Redirect from="/signup" to="/"/> :<Route exact path="/signup" component={Signup}></Route>}
          {localStorage.jwt === undefined ? <Redirect from="/company" to="/"/> : <Route exact path="/company" component={Company}></Route>}
          {localStorage.jwt === undefined ? <Redirect from="/company/new" to="/"/> : <Route exact path="/company/new" component={NewLocation}></Route>}
          {localStorage.jwt === undefined ? <Redirect from="/company/:location" to="/"/> : <Route exact path="/company/:location" component={Location}></Route>}
          // Maybe later if there is a stock page
          //{localStorage.jwt === undefined ? <Redirect from="/company/:location/stock" to="/"/> : <Route exact path="/company/:location/stock" component={Stock}></Route>}
        </Switch>
      </Router>
    </div>
  )
}
export default Main
