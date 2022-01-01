import React, {useEffect, useState} from "react"
import Anime from 'react-anime';
import requests from "../lib/requests"
import styles from "../css/Home.module.css"
import chain from "../assets/chain.png"
import bell from "../assets/Bell.png"
import MerryChristmasLights from "./MerryChristmasLights.js"
function Home(props) {
  const [test, setTest] = useState("");
  const [testDrop, setTestDrop] = useState("")
  const [testDrop2, setTestDrop2] = useState("")
  const [number, setNumber] = useState(0)
  const [christmas, setChristmas] = useState(true)
  const [menuShow, setMenuShow] = useState(false);
  useEffect(() => {
    requests.getCompanies().then(res => {
      console.log(res.data)
    })
  }, []);

  function changeTest(event) {
    test ? setTest(false) : setTest(true);
  }
  function changeTestDrop(event) {
    testDrop ? setTestDrop(false) : setTestDrop(true);
  }
  function changeTestDrop2(event) {
    testDrop2 ? setTestDrop2(false) : setTestDrop2(true);
  }
  return(
      <div class="nonNav">
        <div id={styles.mainSign}>
          <div id={styles.mainSignLeftHolder}>
            <Anime
              translateX={["100%", 0]}
              duration={1000}
              easing="linear"
            >
              <h2 id={styles.mainSignLeft} >Supply Cha</h2>
            </Anime>
          </div>
          <div class={styles.chainHolder}>
            <Anime
              translateX={["-100%",0]}
              duration={1000}
              easing="linear"
            >
              <img id={styles.chainLeft} src={chain}></img>
            </Anime>
            Ugly chain couldn't find one with white outlines (if see replace)
            This is basically a comment
          </div>
          <div id={styles.mainSignRightHolder}>
            <Anime
              translateX={["-100%", 0]}
              duration={1000}
              easing="linear"
            >
              <h2 id={styles.mainSignRight} >in Solutions</h2>
            </Anime>
          </div>
          <div class={styles.chainHolder}>
            <Anime
              translateX={["100%",0]}
              duration={1000}
              easing="linear"
            >
              <img id={styles.chainRight} src={chain}></img>
            </Anime>
          </div>
        </div>
        <h2 onClick={() => props.history.push("/company")}>Company Page (Can click if logged in)</h2>

        <div id="testingAnimePopOutMenu">
          {test && <Anime
            easing="linear"
            duration={200}
            delay={(e,i) => i* 100}
            width={[0,"50%"]}
          >
            <h1 class={styles.test}>Testing</h1>
            <h1 class={styles.test}>Testing</h1>
            <h1 class={styles.test}>Testing</h1>
            <h1 class={styles.test}>Testing</h1>
          </Anime>}
          {test === false && <Anime
            easing="linear"
            width={[0, "50%"]}
            duration={200}
            delay={(e,i) => i*100}
            complete= {function(test) {
              setTest("")
            }}
            direction="reverse"
          >
            <h1 class={styles.test}>Testing</h1>
            <h1 class={styles.test}>Testing</h1>
            <h1 class={styles.test}>Testing</h1>
            <h1 class={styles.test}>Testing</h1>
          </Anime>}
        </div>

        {testDrop === true && <div id="testingAnimeDropDownMenu">
          {[...Array(4)].map((x,y) => (
            <div style={{overflow:"hidden"}}>
              <Anime
                easing="linear"
                translateY={["-100%", 0]}
                duration={300}
                delay={(e) => y*300}
              >
                <h1 style={{backgroundColor:"red", margin:0}}  >Test Link {y} Sequential drop down now understand the divs skip z index by overflow</h1>
              </Anime>
            </div>
          ))}
        </div>}

        {testDrop === false && <div id="testingAnimeDropDownMenu">
          {[...Array(4)].map((x,y) => (
            <div style={{overflow:"hidden"}}>
              <Anime
                delay={(e,i) => (3-y)*300}
                easing="linear"
                translateY={[0, "-100%"]}
                duration={300}
                complete= {function() {
                  setTimeout(function() {
                    setTestDrop("")
                    console.log("There must be a better way without using the <anime> tag as its broken for me and <Anime> doesn't allow .reverse()")
                  }, 900)
                }}
              >
                <h1 style={{backgroundColor:"red", margin:0}}  >Test Link {y} Sequential drop down now understand the divs skip z index by overflow</h1>
              </Anime>
            </div>
          ))}
        </div>}

        {testDrop2 && <div style={{overflow:"hidden"}} id="testingAnimeDropDownMenu2">
          {[...Array(4)].map((x,y) => (
            <div>
              <Anime
                easing="linear"
                translateY={[-4*38,0]}
                duration={1000}
                >
                <h1 style={{backgroundColor:"blue", margin:0}}  >Test Link {y} Basic altogether drop down</h1>
              </Anime>
            </div>
          ))}
        </div>}

        {testDrop2 === false && <div style={{overflow:"hidden"}} id="testingAnimeDropDownMenu2">
          {[...Array(4)].map((x,y) => (
            <div>
              <Anime
                easing="linear"
                translateY={[-4*38,0]}
                duration={1000}
                direction="reverse"
                complete={function() {
                  setTestDrop2("")
                  console.log("First time direction=reverse works as intended")
                }}
                >
                <h1 style={{backgroundColor:"blue", margin:0}}  >Test Link {y} Basic altogether drop down</h1>
              </Anime>
            </div>
          ))}
        </div>}
        <h1 onClick={changeTestDrop}>Change Drop Down</h1>
        <h1 onClick={changeTestDrop2}>Change Drop Down 2</h1>
        <h1 onClick={changeTest}>Change</h1>
        Solved the animation being reset by changes of state solution
        is to seperate the change states and the animations as the
        rerender of the states toggles the animation again for X
        number of time the X number of times is unknown and random
        to my knowledge will find out for future reference
          <div id={styles.merryChristmas}>
            <img src={bell} id={styles.merryBell}></img>
            <Anime
              direction="alternate"
              loop={true}
              easing="easeOutElastic"
              scale={[0,1]}
              duration={1000}
              delay={(e,i) => i*200}
              endDelay={500}
            >
              <span class={styles.merryChristmasLetter}>M</span>
              <span class={styles.merryChristmasLetter}>e</span>
              <span class={styles.merryChristmasLetter}>r</span>
              <span class={styles.merryChristmasLetter}>r</span>
              <span class={styles.merryChristmasLetter}>y</span>
              <span class={styles.merryChristmasLetter}>&nbsp;C</span>
              <span class={styles.merryChristmasLetter}>h</span>
              <span class={styles.merryChristmasLetter}>r</span>
              <span class={styles.merryChristmasLetter}>i</span>
              <span class={styles.merryChristmasLetter}>s</span>
              <span class={styles.merryChristmasLetter}>t</span>
              <span class={styles.merryChristmasLetter}>m</span>
              <span class={styles.merryChristmasLetter}>a</span>
              <span class={styles.merryChristmasLetter}>s</span>
            </Anime>
            <MerryChristmasLights/>
          </div>
        this is for developer side for anime i guess Ignore large fat text or lorem ipsum
        <div id={styles.tripleHolder}>
          <Anime
            translateX={["-1000px",0]}
            duration={2000}
          >
            <div class={styles.innerTripHolder}>
              <Anime
                fontSize={[0,"25px"]}
                duration={1000}
                delay={(e) => 2000}
                marginTop={[0,"15px"]}
              >
                <div class={styles.innerTripHolderTitle}>Left side</div>
              </Anime>
              <Anime
                fontSize={[0,"15px"]}
                duration={1000}
                delay={(e) => 2000}
                width={["7.5vw","auto"]}
                height={["7.5vw","auto"]}
                margin={"30px"}
                begin={function() {
                  setTimeout(function() {
                    document.getElementsByClassName(styles.innerTripHolderDiv)[0].style.width = "auto"
                    document.getElementsByClassName(styles.innerTripHolderDiv)[0].style.height = "auto"
                  },2000)
                  setTimeout(function() {
                    document.getElementById(styles.tripleHolder).style.color = "white"
                  }, 3300)
                }}
              >
                <div class={styles.innerTripHolderDiv}>Rubbish gibberish text that means nothing at all and is just here to fill up space and I couldn't be bothered to find the proper lorem ipsum so i just started typing as if a rambling is occuring in text till it is long enough to satisfy a small paragraph to replace a lorem ipsum</div>
              </Anime>
            </div>
          </Anime>
          <Anime
            translateY={["1000px",0]}
            duration={2000}
          >
            <div class={styles.innerTripHolder}>
              <Anime
                fontSize={[0,"25px"]}
                duration={1000}
                delay={(e) => 2000}
                marginTop={[0,"15px"]}
              >
                <div class={styles.innerTripHolderTitle}>Center</div>
              </Anime>
              <Anime
                fontSize={[0,"15px"]}
                duration={1000}
                delay={(e) => 2000}
                width={["7.5vw","auto"]}
                height={["7.5vw","auto"]}
                margin={"30px"}
                begin={function() {
                  setTimeout(function() {
                    document.getElementsByClassName(styles.innerTripHolderDiv)[1].style.width = "auto"
                    document.getElementsByClassName(styles.innerTripHolderDiv)[1].style.height = "auto"
                  },2000)
                }}
              >
                <div class={styles.innerTripHolderDiv}>Rubbish gibberish text that means nothing at all and is just here to fill up space and I couldn't be bothered to find the proper lorem ipsum so i just started typing as if a rambling is occuring in text till it is long enough to satisfy a small paragraph to replace a lorem ipsum</div>
              </Anime>
            </div>
          </Anime>
          <Anime
            translateX={["1000px",0]}
            duration={2000}
          >
            <div class={styles.innerTripHolder}>
              <Anime
                fontSize={[0,"25px"]}
                duration={1500}
                delay={(e) => 2000}
                marginTop={[0,"15px"]}
              >
                <div class={styles.innerTripHolderTitle}>Right side</div>
              </Anime>
              <Anime
                fontSize={[0,"15px"]}
                duration={1000}
                delay={(e) => 2000}
                width={["7.5vw","auto"]}
                height={["7.5vw","auto"]}
                margin={"30px"}
                begin={function() {
                  setTimeout(function() {
                    document.getElementsByClassName(styles.innerTripHolderDiv)[2].style.width = "auto"
                    document.getElementsByClassName(styles.innerTripHolderDiv)[2].style.height = "auto"
                  },2000)
                }}
              >
                <div class={styles.innerTripHolderDiv}>Rubbish gibberish text that means nothing at all and is just here to fill up space and I couldn't be bothered to find the proper lorem ipsum so i just started typing as if a rambling is occuring in text till it is long enough to satisfy a small paragraph to replace a lorem ipsum</div>
              </Anime>
            </div>
          </Anime>
        </div>
      </div>
  )
}


export default Home
