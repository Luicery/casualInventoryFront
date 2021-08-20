import React, {useEffect} from "react"
import requests from "../lib/requests"
function Home(props) {

  useEffect(() => {
    requests.getCompanies().then(res => {
      console.log(res.data)
    })
  }, [])
  return(
    <div>
      <h2>Yes</h2>
      <h2 onClick={() => props.history.push("/company")}>Company Page (CAN CLICK)</h2>
    </div>
  )
}
export default Home
