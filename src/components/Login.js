import React, {useState} from "react"
import requests from "../lib/requests"
import styles from "../css/Login.module.css"
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function loginSubmit(event) {
    event.preventDefault();
    if(email === "" || password === "") {
      return console.log("Login not filled in")
    }
    console.log("yes");
    requests.login(email, password).then(res => {
      props.history.push("/");
      window.location.reload();
    })
  }
  return(
    <div class="nonNav" id={styles.loginHolder}>
      <form onSubmit={loginSubmit}>
        <span>Email:</span>
        <input name="email" type="email" placeholder="Email" onChange={(event) => setEmail((event.target.value).toLowerCase())}></input>
        <br/><span>Password:</span>
        <input name="password" type="password" placeholder="Password" onChange={(event) => setPassword((event.target.value).toLowerCase())}></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
}
export default Login
