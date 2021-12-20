import React, {useEffect, useState} from "react"
import requests from "../lib/requests"

function Test() {

  useEffect(() => {
    requests.getCompanytest().then(res => {
      console.log(res.data)
    })
    //Seed for items
    for(let x = 1; x <= 120; x++) {
      let newdiv = document.createElement("div")
      let content = document.createTextNode(`itest${x} = Item.create(amount:${Math.floor(1000 + Math.random() * 1000)}, price:${Math.floor(10 + Math.random() * 90)}, name:"${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}${String.fromCharCode(97 + (Math.floor(Math.random() * 26)))}", restockPoint:${Math.floor(400 + Math.random() * 500)}, restockTo:${Math.floor(1200 + Math.random() * 1000)}, lastSupplier:0, autoRestock:${Math.round(Math.random())}`)
      let current = document.getElementById("repeatItem")
      newdiv.appendChild(content)
      current.appendChild(newdiv)
    }
    //seed for not sure what its called but appending items to stocks
    for(let y = 0; y <= 23; y++) {

      let newdiv = document.createElement("div")
      let content = document.createTextNode(`stest${y+1}.items << itest${(y*5)+1} << itest${(y*5)+2} << itest${(y*5)+3} << itest${(y*5)+4} << itest${(y*5)+5}`)
      let current = document.getElementById("repeatStock")
      newdiv.appendChild(content)
      current.appendChild(newdiv)
    }
  }, [])

  return(
    <div>
      THE GREAT TEST PAGE FOR CREATING STUFF AND SHOULD DELETE
      <div id="repeatItem"></div><br/>
      <div id="repeatStock"></div>
    </div>
  )
}
export default Test
