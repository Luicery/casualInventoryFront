import React, {useEffect, useState} from "react"
import requests from "../lib/requests"
import styles from "../css/Company.module.css"
function Company(props) {
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [manager, setManager] = useState("")
  const [supplier, setSupplier] = useState(false)
  const [address, setAddress] = useState("")
  useEffect(() => {
    requests.getCompany().then(res => {
      setCompany(res.data)
      console.log(res.data)
    })
  }, [])
  function newLocation(event) {
    event.preventDefault()
    requests.newLocation(address, phone, manager, supplier).then(res => {
      console.log("SUCCESS")
    })
  }
  function locationDelete(event) {
    event.preventDefault()
    console.log(event.target.id)
    requests.deleteLocation(event.target.id).then(res => {
      console.log("Deleted location")
    })
  }
  // Remember the , [] means to only do once when the page loads dont delete it
  return(
    <div class="nonNav" id={styles.companyHolder}>
      <h2 id={styles.mainSign}>Company</h2>
      {company !== "" && <div>
        Address:{company.company.address}<br/>
        Phone:{company.company.phone}<br/>
        Email:{company.company.email}<br/>
        Name:{company.company.name}<br/><br/>
      <form onSubmit={newLocation}>
        Manager:<input type="string" onChange={(event) => setManager((event.target.value).toLowerCase())}></input><br/>
        Phone:<input type="string" onChange={(event) => setPhone((event.target.value).toLowerCase())}></input><br/>
        Address:<input type="string" onChange={(event) => setAddress((event.target.value).toLowerCase())}></input><br/>
        Can supply:<input type="checkbox" checked={supplier} onChange={() => setSupplier(supplier ? false : true)}></input><br/>
        <input type="submit" value="Create new location"></input><br/>
      </form>
        {company.companyLocation.map((x,y) => (
          <div>
            <h2 onClick={() => props.history.push(`/company/${x.id}`)}>Location {y+1} (CAN CLICK)</h2>
            Address:{x.address}<br/>
            Phone:{x.phone}<br/>
            Manager:{x.manager}<br/>
            <form id={x.id} onSubmit={locationDelete}>
              <input type="submit" value="Delete location"></input>
            </form><br/>
          </div>
        ))}
      </div>}
    </div>
  )
}
export default Company
