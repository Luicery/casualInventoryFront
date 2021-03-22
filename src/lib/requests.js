import axios from "axios"

export default {
  login(email, password) {
    return axios.post("http://localhost:3000/login", {auth: {email:email, password:password}}).then(res => {
      localStorage.setItem("jwt", res.data.jwt)
    }).catch(res => {
      console.log("Backend is not up from laziness Login")
    })
  },
  signup(email, name, address, password) {
    return axios.post("http://localhost:3000/signup", {company: {email:email, password:password, address:address, name:name}}).then(res => {
      this.login(email, password)
    }).catch(res => {
      console.log("Backend is not up from laziness Signup")
    })
  }
}
