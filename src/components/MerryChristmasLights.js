import React, {useState, useEffect} from "react"
import Anime from "react-anime"
import styles from "../css/Home.module.css"
function MerryChristmasLights(props) {
  const [christmas, setChristmas] = useState(true)
  useEffect(() => {
    const asd = setInterval(() => {
      christmas ? setChristmas(false) : setChristmas(true);
    },1000);
    return () => {clearInterval(asd)}
  }, [christmas])
    return (
      <span>
        {christmas === true && <div><div id={styles.merryLeftmas} class={styles.merryRed}/>
        <div id={styles.merryRightmas} class={styles.merryGreen}/></div>}

        {christmas === false && <div><div id={styles.merryLeftmas} class={styles.merryGreen}/>
        <div id={styles.merryRightmas} class={styles.merryRed}/></div>}
      </span>
    )
}
export default MerryChristmasLights
