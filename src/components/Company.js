import React, {useEffect, useState} from "react"
import requests from "../lib/requests"
function Company(props) {
  const [company, setCompany] = useState("")
  useEffect(() => {
    requests.getCompany().then(res => {
      setCompany(res.data)
      console.log(res.data)
    })
  }, [])
  // Remember the , [] means to only do once when the page loads dont delete it
  return(
    <div>
      <h2>Company</h2>
      {company !== "" && <div>
        Address:{company.company.address}<br/>
        Phone:{company.company.phone}<br/>
        Email:{company.company.email}<br/>
        Name:{company.company.name}
        {company.companyLocation.map((x,y) => (
          <div>
            <h2 onClick={() => props.history.push(`/company/${x.id}`)}>Location {y+1} (CAN CLICK)</h2>
            Address:{x.address}<br/>
            Phone:{x.phone}<br/>
            Manager:{x.manager}
          </div>
        ))}
      </div>}
    </div>
  )
}
export default Company
