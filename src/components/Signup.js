import React, {useState, useEffect} from "react"
import requests from "../lib/requests"
import styles from "../css/Signup.module.css"
function Signup(props) {
  const [email, setEmail] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  function signupSubmit(event) {
    event.preventDefault();
    if(email === "" || passwordConfirm === "" || name === "" || password === "" || address === "" || password !== passwordConfirm) {
      return console.log("Invalid signup")
    }
    console.log("Valid Signup")
    requests.signup(email, name, address, password).then(res => {
      console.log("asd")
      props.history.push("/");
    })
  }
  return(
    <div class="nonNav" id={styles.signUpHolder}>
      <form onSubmit={signupSubmit}>
        <span>Email:</span>
        <input name="email" type="email" placeholder="Email" onChange={(event) => setEmail((event.target.value).toLowerCase())}></input>
        <br/><span>Name:</span>
        <input name="name" type="string" placeholder="Company Name" onChange={(event) => setName((event.target.value).toLowerCase())}></input>
        <br/><span>Address:</span>
        <input name="address" type="string" placeholder="Company Address" onChange={(event) => setAddress((event.target.value).toLowerCase())}></input>
        <br/><span>Password:</span>
        <input name="password" type="password" placeholder="Password" onChange={(event) => setPassword((event.target.value).toLowerCase())}></input>
        <br/><span>Password Confirmation:</span>
        <input name="passwordConfirmation" type="password" placeholder="Password Confirmation" onChange={(event) => setPasswordConfirm((event.target.value).toLowerCase())}></input>
        <br/><input type="submit" value="Signup"></input>
      </form>
    </div>
  )
}
export default Signup
