import React, {useState, useEffect} from "react"
import styles from "../css/Navigation.module.css"
import hamborger from "../assets/hamborger.png"
import Anime from "react-anime"
function Navigation(props) {
  const [menuShow, setMenuShow] = useState(true);
  const [showBurger, setShowBurger] = useState(true);
  const [procAnimeIn, setProcAnimeIn] = useState(false);
  const [procAnimeOut, setProcAnimeOut] = useState(false);
  const logout = () => {
    localStorage.clear("jwt");
  };
  function menuShowFunc(event) {
    setProcAnimeOut(true);
    setMenuShow(false);
    setShowBurger(false);
    document.getElementsByClassName("nonNav")[0].onclick = menuCloseFunc
  };
  function menuCloseFunc(event) {
    setProcAnimeOut(false);
    setProcAnimeIn(true);
  };
  return(
    <nav class={menuShow ? styles.navigationBarFull : ""} id={styles.navigationBar}>

      {showBurger === true && <img id={styles.hamborger} src={hamborger} onClick={menuShowFunc}></img>}
      {procAnimeOut === true && <div>
      <Anime
        easing="linear"
        duration={200}
        delay={(e,i) => i* 100}
        translateX={["-100%", 0]}
      >
        <span id={styles.menuName}>Supply Chain Solutions</span>
        <a id="homeLink" class={styles.menuItem} href="/">Home</a>
        {localStorage.jwt === undefined && <a id="loginLink" class={styles.menuItem}  href="/login">Login</a>}
        {localStorage.jwt === undefined && <a id="signupLink" class={styles.menuItem} href="/signup">Signup</a>}
        {localStorage.jwt !== undefined && <a id="logoutLink" class={styles.menuItem} href="/" onClick={logout}>Logout</a>}
      </Anime>
      </div>}
        {procAnimeIn === true && <div>
        <Anime
          easing="linear"
          duration={200}
          delay={(e,i) => i* 100}
          translateX={["-100%", 0]}
          direction="reverse"
          complete= {function() {
            setProcAnimeIn(false);
            setShowBurger(true);
            setMenuShow(true);
          }}
        >
          <span id={styles.menuName}>Supply Chain Solutions</span>
          <a id="homeLink" class={styles.menuItem} href="/">Home</a>
          {localStorage.jwt === undefined && <a id="loginLink" class={styles.menuItem}  href="/login">Login</a>}
          {localStorage.jwt === undefined && <a id="signupLink" class={styles.menuItem} href="/signup">Signup</a>}
          {localStorage.jwt !== undefined && <a id="logoutLink" class={styles.menuItem} href="/" onClick={logout}>Logout</a>}
        </Anime>
        </div>}
    </nav>
  )
}
export default Navigation
