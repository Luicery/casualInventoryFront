import React from "react"
import axios from "axios"
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch
} from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Company from "./Company"
import Location from "./Location"
import Stock from "./Stock"
import NewLocation from "./NewLocation"
// Maybe just delete the stock link and make it apart of location
function Main() {
  return(
    <div>
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/company/:company" component={Company}></Route>
          <Route exact path="/company/:company/:location" component={Location}></Route>
          <Route exact path="/company/:company/:location/new" component={NewLocation}></Route>
          <Route exact path="/company/:company/:location/stock" component={Stock}>{}</Route>
        </Switch>
      </Router>
    </div>
  )
}
export default Main
