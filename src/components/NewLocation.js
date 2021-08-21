import React, {useEffect, useState} from "react"
import requests from "../lib/requests"
function NewLocation() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [manager, setManager] = useState("");
  const [isSupplier, setIsSupplier] = useState("");
  function newLocationSubmit(event) {
    event.preventDefault();
    console.log(isSupplier)
    if(address === "" || phone === "" || manager === "" || isSupplier === "") {
      return console.log("Invalid location")
    }
    requests.newLocation(address, phone, manager, isSupplier).then(res => {
      console.log("Success")
    })
  }
  return(
    <div>
      <form onSubmit={newLocationSubmit}>
        <span>Manager:</span>
        <input name="manager" type="string" placeholder="Manager name" onChange={(event) => setAddress((event.target.value).toLowerCase())}></input>
        <br/><span>Address:</span>
        <input name="address" type="string" placeholder="Location address" onChange={(event) => setManager((event.target.value).toLowerCase())}></input>
        <br/><span>Phone:</span>
        <input name="phone" type="string" placeholder="Phone number" onChange={(event) => setPhone((event.target.value).toLowerCase())}></input>
        <br/><span>Is a supplier:</span>
        <input name="isSupplier" type="checkbox" onChange={(event) => isSupplier ? setIsSupplier(false) : setIsSupplier(true)}></input>
        <br/><input type="submit" value="Signup"></input>
      </form>
    </div>
  )
}
export default NewLocation
