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
import Location from ".Location"
import Stock from "./Stock"
function Main() {
  return(
    <div>
      <Navigation/>
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/:company" component={Company}></Route>
        <Route exact path="/:company/:location" component={Location}></Route>
        <Route exact path="/:company/:location/:stock" component={Stock}></Route>
      </BrowserRouter>
    </div>
  )
}
export default Main
