import React from "react"

import NavBar from "./NavBar"


const Home = () => {

    const mensajeBienvenida = "Bienvenidos a React"
    const stylesLi = {
        color: "red"
    }

    const alertMsg = () => {alert ("Hola")}

    return (
        <>
            <NavBar>hOLA</NavBar>
            <div className="App">
                <h1 className="text-3xl font-bold underline">{mensajeBienvenida}</h1>
                <ul>
                    <li style={stylesLi}>React</li>
                    <li>JSX</li>
                    <li>WEBPACK</li>
                </ul>
                <footer name="Maria" action={alertMsg}></footer>
                <h3>Mi children</h3>
                <h4>Otro children</h4>
            </div>
        
        </>
    )
}
export default Home