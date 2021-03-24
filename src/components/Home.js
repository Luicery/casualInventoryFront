import React, {useEffect} from "react"
import requests from "../lib/requests"
function Home() {

  useEffect(() => {
    requests.getCompanies().then(res => {
      console.log(res.data)
    })
  }, [])
  return(
    <div>
      <h2>Yes</h2>
    </div>
  )
}
export default Home
