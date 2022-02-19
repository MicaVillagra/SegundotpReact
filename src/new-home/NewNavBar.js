import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./../img/logodg.jpg"

const NewNavBar = () => {
    return (
        <nav class=" colorNav text-light navbar navbar-expand-lg navbar-black ">
            <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="textosNav" >
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="text-black nav-link active" aria-current="page" href="inicio">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="text-black nav-link" href="TRABAJOS">Trabajos</a>
                        </li>
                        <li class="nav-item">
                        <a class="text-black nav-link" href="ENVIOS">Envios</a>
                        </li>
                        
                        </ul>
                    </div>
                    <img  src={logo} class="logo" alt="logo" />
            </div>
        </nav>
    )
}

export default NewNavBar