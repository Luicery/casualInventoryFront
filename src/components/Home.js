import React, {useEffect, useState} from "react"
import Anime from 'react-anime';
import requests from "../lib/requests"
import styles from "../css/Home.module.css"
function Home(props) {
  const [test, setTest] = useState("");
  const [testDrop, setTestDrop] = useState("")
  const [testDrop2, setTestDrop2] = useState("")
  const [menuShow, setMenuShow] = useState(false);
  useEffect(() => {
    requests.getCompanies().then(res => {
      console.log(res.data)
    })
  }, [])
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
      <div id="nonNav">
        <div id={styles.mainSign}>
          <h2 id={styles.mainSignRight} >Supply Chain Solutions</h2>
          <div id={styles.mainSignCrop}>
            <h2 id={styles.mainSignLeft} >Supply Chain Solutions</h2>
          </div>
        </div>
        <h2 onClick={() => props.history.push("/company")}>Company Page (CAN CLICK)</h2>
        <div id="repeat"></div>
        <div id="testingAnimePopOutMenu">
          {test && <Anime
            easing="linear"
            duration={200}
            delay={(e,i) => i* 100}
            width={[0,"50%"]}
          >
            <h1 id={styles.test}>Testing</h1>
            <h1 id={styles.test}>Testing</h1>
            <h1 id={styles.test}>Testing</h1>
            <h1 id={styles.test}>Testing</h1>
          </Anime>}
          {test === false && <Anime
            easing="linear"
            width={[0, "50%"]}
            duration={200}
            delay={(e,i) => i* 100}
            complete= {function(test) {
              setTest()
            }}
            direction="reverse"
          >
            <h1 id={styles.test}>Testing</h1>
            <h1 id={styles.test}>Testing</h1>
            <h1 id={styles.test}>Testing</h1>
            <h1 id={styles.test}>Testing</h1>
          </Anime>}
        </div>
        {testDrop && <div id="testingAnimeDropDownMenu">
          {[...Array(4)].map((x,y) => (
            <div style={{overflow:"hidden"}}>
              <Anime
                easing="linear"
                translateY={["-400%", 0]}
                duration={y*300}
                zIndex={-y*1000}
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
        <h1 onClick={changeTestDrop}>Change Drop Down</h1>
        <h1 onClick={changeTestDrop2}>Change Drop Down 2</h1>
        <h1 onClick={changeTest}>Change</h1>


        this is for developer side for anime i guess Ignore large fat text or lorem ipsum

        <Anime translateX={50}>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl. Amet risus nullam eget felis eget nunc. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Elit pellentesque habitant morbi tristique senectus. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Lacus vel facilisis volutpat est velit egestas dui id ornare. Tellus at urna condimentum mattis pellentesque id. Magna fringilla urna porttitor rhoncus dolor purus non. Mollis aliquam ut porttitor leo a. Rhoncus mattis rhoncus urna neque. Ultrices in iaculis nunc sed augue lacus.

          Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Purus semper eget duis at tellus. Velit aliquet sagittis id consectetur. Etiam erat velit scelerisque in dictum non consectetur. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Odio eu feugiat pretium nibh ipsum. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Scelerisque viverra mauris in aliquam sem. Sed id semper risus in hendrerit gravida rutrum quisque. Tristique senectus et netus et malesuada. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum.

          Pellentesque dignissim enim sit amet venenatis urna cursus eget. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Aliquam sem fringilla ut morbi tincidunt augue interdum. Dictum fusce ut placerat orci. Amet venenatis urna cursus eget. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Vitae tortor condimentum lacinia quis vel. Gravida rutrum quisque non tellus orci ac auctor. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Duis at tellus at urna condimentum mattis pellentesque id. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Morbi tristique senectus et netus et.

          Sed enim ut sem viverra aliquet eget sit amet tellus. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Ut ornare lectus sit amet est. Arcu dui vivamus arcu felis bibendum ut tristique. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Arcu cursus euismod quis viverra nibh cras pulvinar. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Proin sed libero enim sed faucibus turpis. Ac orci phasellus egestas tellus rutrum. Ultricies leo integer malesuada nunc. Ut tellus elementum sagittis vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Eu ultrices vitae auctor eu augue ut lectus. Platea dictumst quisque sagittis purus sit amet volutpat. Fames ac turpis egestas sed tempus urna. Faucibus pulvinar elementum integer enim neque volutpat. Ipsum dolor sit amet consectetur adipiscing elit. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Erat imperdiet sed euismod nisi porta.

          Curabitur vitae nunc sed velit dignissim sodales ut eu. Euismod elementum nisi quis eleifend quam adipiscing. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. In ornare quam viverra orci. Vel eros donec ac odio tempor orci dapibus ultrices in. Adipiscing elit pellentesque habitant morbi tristique senectus. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Elementum tempus egestas sed sed. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Tincidunt arcu non sodales neque sodales. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Sagittis nisl rhoncus mattis rhoncus. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Commodo sed egestas egestas fringilla.

          Id ornare arcu odio ut sem nulla. Sed sed risus pretium quam vulputate dignissim. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu turpis egestas pretium aenean. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Mattis pellentesque id nibh tortor id aliquet lectus proin. Viverra tellus in hac habitasse. Amet nulla facilisi morbi tempus iaculis. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Viverra orci sagittis eu volutpat odio facilisis. Dolor sit amet consectetur adipiscing elit. Vulputate enim nulla aliquet porttitor lacus. Diam donec adipiscing tristique risus nec feugiat in.

          Vitae congue eu consequat ac. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Interdum velit euismod in pellentesque massa placerat duis ultricies. Consequat mauris nunc congue nisi vitae. Felis imperdiet proin fermentum leo vel orci porta. Cursus euismod quis viverra nibh cras pulvinar mattis. Sed nisi lacus sed viverra tellus. Penatibus et magnis dis parturient montes nascetur ridiculus. Erat nam at lectus urna duis convallis convallis tellus. Scelerisque in dictum non consectetur a erat nam at.

          Ultrices in iaculis nunc sed augue lacus viverra vitae. Duis ut diam quam nulla porttitor massa id. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Aliquet porttitor lacus luctus accumsan tortor. Ut faucibus pulvinar elementum integer. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Convallis tellus id interdum velit laoreet id. In hac habitasse platea dictumst quisque sagittis. Scelerisque purus semper eget duis. Nunc lobortis mattis aliquam faucibus purus in. Euismod quis viverra nibh cras pulvinar. Tellus mauris a diam maecenas sed enim ut sem. Nunc pulvinar sapien et ligula. Velit scelerisque in dictum non consectetur a. Condimentum mattis pellentesque id nibh tortor. Hac habitasse platea dictumst quisque sagittis purus. Neque gravida in fermentum et sollicitudin ac orci phasellus. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique.

          Augue neque gravida in fermentum. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Enim praesent elementum facilisis leo vel fringilla. Pharetra et ultrices neque ornare aenean euismod. Vulputate dignissim suspendisse in est. Dis parturient montes nascetur ridiculus mus mauris. Pharetra magna ac placerat vestibulum. Amet facilisis magna etiam tempor orci eu lobortis. Ac felis donec et odio pellentesque diam volutpat commodo sed. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Aliquam purus sit amet luctus venenatis. Viverra tellus in hac habitasse platea dictumst. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.

          Erat imperdiet sed euismod nisi. Tincidunt id aliquet risus feugiat. Massa id neque aliquam vestibulum morbi. Eu mi bibendum neque egestas congue quisque egestas. Elementum eu facilisis sed odio morbi quis. Vitae sapien pellentesque habitant morbi tristique. Dictum non consectetur a erat nam at. Sed augue lacus viverra vitae congue eu. Erat velit scelerisque in dictum non consectetur a erat. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In arcu cursus euismod quis viverra nibh. Porta non pulvinar neque laoreet suspendisse interdum. Nullam eget felis eget nunc lobortis. Purus faucibus ornare suspendisse sed nisi lacus sed. Lectus proin nibh nisl condimentum id venenatis a condimentum.
          </div>
        </Anime>
      </div>
  )
}


export default Home
