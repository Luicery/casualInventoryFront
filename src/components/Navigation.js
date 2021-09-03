import React, {useState, useEffect} from "react"
import styles from "../css/Navigation.module.css"
function Navigation(props) {
  const [scroll, setScroll] = useState("")
  const logout = () => {
    localStorage.clear("jwt")
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight-38)
    })
  }, [])
  return(
    <div>
      {window.location.href === "http://localhost:3001/" && <nav id={scroll ? styles.navigationBar : styles.navigationBarHome}>
        <a id="homeLink" href="/">Home</a>
        {localStorage.jwt === undefined && <a id="loginLink" class={styles.floatRight} href="/login">Login</a>}
        {localStorage.jwt === undefined && <a id="signupLink" class={styles.floatRight} href="/signup">Signup</a>}
        {localStorage.jwt !== undefined && <a id="logoutLink" class={styles.floatRight} href="/" onClick={logout}>Logout</a>}
      </nav>}
      {window.location.href !== "http://localhost:3001/" && <nav id={styles.navigationBar}>
        <a id="homeLink" href="/">Home</a>
        {localStorage.jwt === undefined && <a id="loginLink" class={styles.floatRight} href="/login">Login</a>}
        {localStorage.jwt === undefined && <a id="signupLink" class={styles.floatRight} href="/signup">Signup</a>}
        {localStorage.jwt !== undefined && <a id="logoutLink" class={styles.floatRight} href="/" onClick={logout}>Logout</a>}
      </nav>}
    </div>
  )
}
export default Navigation
