/* import "./App.css"; */

import {useEffect, useState} from "react"
/* import ItemListContainer from "./new-home/ItemListContainer";
import NewNavBar from "./new-home/NewNavBar"; */


/* 
function App (){
  return (
    <>
      /* <NewNavBar></NewNavBar>
      <ItemListContainer></ItemListContainer> */
  /*   </>
  );
}

export default App;
 */
const ComponenteEstado = () => {

  const [contador, setContador] = useState (0)

  useEffect ( () => {
    promesa()
    console.log ("se ejecuto el efecto");
    return () => {
      console.log ("limpieza al unmount")
    }
  }, [] )
  const promesa = () => {
    console.log("inicia mi funcion con una promesa");
    const miPromesa = new Promise( (resolve, reject) => {
     const random = Math.random()
     console.log ("random:", random)
     if (Math.random() <0.5) {
      reject("la promesa se rechazo")
     }else{
        resolve("la promesa se resolvio") 
     }
    
    })
    miPromesa.then ( (res) => {
      console.log (res);
    }, (err) => {
      console.log(err)
    }).finally ( () => {
      console.log ("finally siempre se ejuca al final")
    })
  }
  const sumarHandler = () => {
    setContador (contador + 1)
  }
  const restarHandler = () => {
    setContador (contador - 1)
  }

  console.log("render del ComponenteEstado");
  return (
    <>
    <div>ComponenteEstado</div>
    Total: {contador}
    <br></br>
    <button onClick={restarHandler}> - </button>
    <button onClick={sumarHandler}> + </button>
    </>
  )
}

export default ComponenteEstado