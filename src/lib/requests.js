import axios from "axios"

let token = "Bearer " + localStorage.getItem("jwt")
export default {
  login(email, password) {
    return axios.post("http://localhost:3000/company_token", {auth: {email:email, password:password}}).then(res => {
      localStorage.setItem("jwt", res.data.jwt)
      console.log(res.data)
    }).catch(res => {
      console.log("Backend is not up from laziness Login")
    })
  },
  signup(email, name, address, password) {
    return axios.post("http://localhost:3000/signup", {email:email, password:password, address:address, name:name}).then(res => {
      this.login(email, password)
    }).catch(res => {
      console.log("Backend is not up from laziness Signup")
    })
  },
  getCompany() {
    return axios.get(`http://localhost:3000/companyProfile`, {headers: { 'Authorization': token } })
  },
  getCompanytest() {
    return axios.get(`http://localhost:3000/companyProfile`, { params:{}, headers: { 'Authorization': token } })
  },
  getCompanies() {
    return axios.get("http://localhost:3000/companies")
  },
  // getLocation(locationId) {
  //   return axios.get(`http://localhost:3000/locationprofile/${locationId}`, { params:{}, headers: { 'Authorization': token } })
  // },
  // Tester below real above
  getLocation(locationId) {
    return axios.get(`http://localhost:3000/locationprofile/${locationId}`, {headers: { 'Authorization': token } })
  },
  newLocation(address, phone, manager, isSupplier) {
    return axios.post(`http://localhost:3000/locations`, {address:address, phone:phone, manager:manager, is_supplier:isSupplier}, {headers: { 'Authorization': token }})
  },
  changeItem(locationId, amount, id) {
    return axios.post(`http://localhost:3000/changeItem`, {locationId:locationId, amount:amount, id:id}, {headers: {"Authorization": token}})
  },
  deleteItem(locationId, id) {
    return axios.post(`http://localhost:3000/deleteItem`,{id:id, locationId:locationId}, {headers: {"Authorization": token}})
  },
  tradeItem(recepCompany, recepLocationId, locationId, name, amount) {
    return axios.post(`http://localhost:3000/tradeItem`,{recepCompany:recepCompany, recepLocationId:recepLocationId, locationId:locationId, name:name, amount:amount}, {headers: {"Authorization": token}})
  },
  newItem(locationId, amount, name, price, restockPoint, restockTo, autoRestock) {
    if(restockPoint >= restockTo) {
      return "Restock point cannot be the restock target"
    } else if((restockPoint !== "" && restockTo !== "") && autoRestock === false) {
      return "Cannot have a restock point and target if you don't want to restock"
    }
    return axios.post(`http://localhost:3000/items`,{amount:amount, name:name, price:price, locationId:locationId, restockPoint:restockPoint, restockTo:restockTo, autoRestock:autoRestock}, {headers: {"Authorization": token}})
  }
}
