import React, { useState, useEffect } from "react"
import Greeter from "./components/Greeter"

const App = () => {

const [username, setUsername] = useState("Amara")

const [loaded, setLoaded] = useState(false)

useEffect(() => {
    setTimeout(() => {
        setLoaded(!loaded)
      }, 3000);

}, [loaded])

const toggle = () => { setLoaded(!loaded) }



if (loaded === false) {
    return <h1>"Website loading ..."</h1>, 
    <button onClick= {toggle}> Toggle </button>
}



    return (
        <div>
            <Greeter phrase= "Hello there" name= "Amara" />
            <Greeter phrase= "Good Morning" name= "Ryan" />
            <Greeter phrase= "Good Evening" name= "Ella" />

            <input value={username} onChange={e => setUsername(e.target.value)} ></input>
            <p>"You are logging in as: {username}</p>
        </div>
    )
}

export default App; 