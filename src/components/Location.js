import React, {useState, useEffect} from "react"
import requests from "../lib/requests"
// .catch(err => {props.history.push("/")})
// console.log(location)
function Location(props) {
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [recepCompany, setRecepCompany] = useState("");
  const [recepLocation, setRecepLocation] = useState("");
  const [restockPoint, setRestockPoint] = useState("");
  const [restockTo, setRestockTo] = useState("");
  const [autoRestock, setAutoRestock] = useState(true);
  useEffect(() => {
    requests.getLocation(props.match.params.location).then(res => {
      setLocation(res.data)
    })
  }, [])
  function itemManipulate(event) {
    event.preventDefault();
    requests.changeItem(props.match.params.location, parseInt(amount), event.target.id).then(res => {
      console.log("SUCCESS")
    })
  }
  function itemTrade(event) {
    event.preventDefault();
    requests.tradeItem(recepCompany, recepLocation, props.match.params.location, event.target.name, amount).then(res => {
      return console.log("SUCCESS")
    }).catch(error => {
      return console.log(error)
    })
  }
  function itemDelete(event) {
    event.preventDefault();
    requests.deleteItem(props.match.params.location ,event.target.id).then(res => {
      console.log("SUCCESS")
    })
  }
  function itemCreate(event) {
    event.preventDefault();
    requests.newItem(props.match.params.location, amount, name, price, restockPoint, restockTo, autoRestock).then(res => {
        return console.log("SUCCESS")
    }).catch(error => {
      return console.log(error)
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
        <h2>Create a new item</h2>
        <form onSubmit={itemCreate}>
          Name:<input type="string" onChange={(event) => setName(event.target.value)}></input><br/>
          Amount:<input type="number"  onChange={(event) => setAmount(event.target.value)}></input><br/>
          Price:<input type="number" onChange={(event) => setPrice(event.target.value)}></input><br/>
          Auto restock:<input type="checkbox" checked={autoRestock} onChange={() => setAutoRestock(autoRestock ? false : true)}></input><br/>
        {autoRestock === true && <span>Restock point:<input type="number" value={restockPoint} onChange={(event) => setRestockPoint(event.target.value)}></input><br/>
      Restock to:<input type="number" value={restockTo} onChange={(event) => setRestockTo(event.target.value)}></input></span>}<br/>
          <input type="submit" value="Create item"></input>
        </form>
        {location.stock.map((x,y) => (
          <div>
            <h2>{x.name}</h2>
            Amount:{x.amount}<br/>
            Restock level:{x.restock}<br/>
            Price:{x.price}<br/>
            Auto restock:{x.autoRestock}<br/>
            Last supplier:{x.lastSupplier}<br/>
          <form id={x.id} onSubmit={itemManipulate}>
            <input type="number" onChange={(event) => setAmount(event.target.value)}></input>
            <input type="submit" value="Change item"></input>
          </form><br/>
          <form id={x.id} onSubmit={itemDelete}>
            <input type="submit" value="Delete item"></input>
          </form><br/>
          <form id={x.id} name={x.name} onSubmit={itemTrade}>
            Amount:<input type="number" onChange={(event) => setAmount(event.target.value)}></input><br/>
            Recepient Company Name<input type="string" onChange={(event) => setRecepCompany(event.target.value)}></input><br/>
          Recepient Location Address<input type="string" size="30" placeholder="Number, Example Road, Area" onChange={(event) => setRecepLocation(event.target.value)}></input><br/>
          <input type="submit" value="Trade item"></input>
          </form><br/>
          </div>
        ))}
      </div>}
    </div>
  )
}
export default Location
