import React, {useState} from "react"
import requests from "../lib/requests"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function loginSubmit(event) {
    event.preventDefault();
    console.log("yes");
    requests.login(email, password).then(res => {
      console.log("asd")
    })
  }
  return(
    <div>
      <form onSubmit={loginSubmit}>
        <span>Email:</span>
        <input name="email" type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}></input>
        <span>Password:</span>
        <input name="password" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
        {email !== "" && password !== "" && <input type="submit" value="Login"></input>}
        {(email === "" || password === "") && <input type="submit" value="Login"></input>}
      </form>
    </div>
  )
}
export default Login
