import React, {useEffect, useState} from "react"
import requests from "../lib/requests"

function Test() {

  useEffect(() => {
    requests.getCompanytest().then(res => {
      console.log(res.data)
    })
  }, [])

  return(
    <div>
      THE GREAT TEST PAGE
    </div>
  )
}
export default Test
