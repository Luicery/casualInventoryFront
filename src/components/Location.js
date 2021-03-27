import React, {useState, useEffect} from "react"
import requests from "../lib/requests"
function Location(props) {
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [recepCompany, setRecepCompany] = useState("");
  const [recepLocationId, setRecepLocationId] = useState("");
  useEffect(() => {
    requests.getLocation(props.match.params.location).then(res => {
      setLocation(res.data)
    }).catch(err => {props.history.push("/")})
    console.log(location)
  }, [])
  function itemManipulate(event) {
    event.preventDefault();
    requests.changeItem(props.match.params.location, amount, event.target.id).then(res => {
      console.log("SUCCESS")
    })
  }
  function itemTrade(event) {
    event.preventDefault();
    requests.tradeItem(recepCompany, recepLocationId, props.match.params.location, name, amount).then(res => {
      return console.log("SUCCESS")
    }).catch(error => {
      return console.log(error)
    })
  }
  function itemDelete(event) {
    event.preventDefault();
    requests.deleteItem(event.target.id).then(res => {
      console.log("SUCCESS")
    })
  }
  return(
    <div>
      {location !== "" && <div>
        <h2>Location of company {location.parentCompany.name}</h2>
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
          <form id={x.id} onSubmit={itemManipulate}>
            <input type="number" onChange={(event) => setAmount(event.target.value)}></input>
            <input type="submit" value="Change item"></input>
          </form><br/>
          <form id={x.id} onSubmit={itemDelete}>
            <input type="submit" value="Delete item"></input>
          </form><br/>
          <form id={x.id} onSubmit={itemTrade}>
            Name:<input type="string" onChange={(event) => setName(event.target.value)}></input><br/>
            Amount:<input type="number" onChange={(event) => setAmount(event.target.value)}></input><br/>
            Recepient Company Name<input type="string" onChange={(event) => setRecepCompany(event.target.value)}></input><br/>
            Recepient Company Location ID to be changed to address<input type="number" onChange={(event) => setRecepLocationId(event.target.value)}></input><br/>
            <input type="submit" value="Trade item"></input>
          </form>
          </div>
        ))}
      </div>}
    </div>
  )
}
export default Location
