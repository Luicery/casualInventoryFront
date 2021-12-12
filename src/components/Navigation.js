import React, {useState, useEffect} from "react"
import styles from "../css/Navigation.module.css"
import hamborger from "../assets/hamborger.png"
import Anime from "react-anime"
function Navigation(props) {
  const [menuShow, setMenuShow] = useState(false);
  const logout = () => {
    localStorage.clear("jwt");
  };
  function menuShowFunc(event) {
    setMenuShow(true);
    document.getElementsByClassName("navigationOpacity")[0].style.opacity="0.5";
  };
  function menuCloseFunc(event) {
    setMenuShow(false);
    document.getElementsByClassName("navigationOpacity")[0].style.opacity="1";
  };
  return(
    <div>
      <nav class={menuShow ? "" : styles.navigationBarFull} id={styles.navigationBar}>
        {menuShow !== true && <img id={styles.hamborger} src={hamborger} width="40px" height="40px" onClick={menuShowFunc}></img>}

        {menuShow === true && <div id={styles.menu}>
        <Anime>
          <span id={styles.menuName}>Supply Chain Solutions</span>
          <span id={styles.menuClose} class={styles.floatRight} onClick={menuCloseFunc}>X</span>
          <a id="homeLink" class={styles.menuItem} href="/">Home</a>
          {localStorage.jwt === undefined && <a id="loginLink" class={styles.menuItem}  href="/login">Login</a>}
          {localStorage.jwt === undefined && <a id="signupLink" class={styles.menuItem} href="/signup">Signup</a>}
          {localStorage.jwt !== undefined && <a id="logoutLink" class={styles.menuItem} href="/" onClick={logout}>Logout</a>}
        </Anime>
        </div>}
      </nav>
    </div>
  )
}
export default Navigation
