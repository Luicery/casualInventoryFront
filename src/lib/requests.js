import axios from "axios"

let token = "Bearer " + localStorage.getItem("jwt")
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
  },
  getCompany(companyId) {
    return axios.get(`http://localhost:3000/companyprofile/${companyId}`)
  },
  getCompanies() {
    return axios.get("http://localhost:3000/companies")
  },
  // getLocation(locationId) {
  //   return axios.get(`http://localhost:3000/locationprofile/${locationId}`, { params:{}, headers: { 'Authorization': token } })
  // },
  // Tester below real above
  getLocation(locationId) {
    return axios.get(`http://localhost:3000/locationprofile/${locationId}`)
  }
}