import React, {useState, useEffect} from "react"
import requests from "../lib/requests"
function Location(props) {
  const [location, setLocation] = useState("");
  useEffect(() => {
    requests.getLocation(props.match.params.location).then(res => {
      setLocation(res.data)
    }).catch(err => {props.history.push("/")})
    console.log(location)
  }, [])
  return(
    <div>
      {location !== "" && <div>
        <h2>Location of company {location.parentCompany.name} company aint got a name yet</h2>
        Address:{location.location.address}<br/>
        Supplier:{location.location.is_supplier}Currently is null<br/>
        Manager:{location.location.manager}<br/>
        Phone:{location.location.phone}<br/>
        <br/>
        {location.stock.map((x,y) => (
          <div>
            <h2>Item {y+1}</h2>
            Name:{x.name}<br/>
            Amount:{x.amount}<br/>
            Restock level: {x.restock}<br/>
          </div>
        ))}
      </div>}
    </div>
  )
}
export default Location
