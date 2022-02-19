import React from 'react'
/* import Item from "./Item" */
import logocard from "./../img/taxid4.jpg"
import logocard1 from "./../img/taxid5.jpg"
import logocard2 from "./../img/taxid6.jpg"


const ItemListContainer = () => {

  /* const productos= [
    {nombre: "Ciervo", precio:1500},
    {nombre: "Jabali", precio:1500},
    {nombre: "Puma", precio:1500},

  ] */
  return (
    <div /* className='item' */>

<h1 className='trabaj'>TRABAJOS</h1>
<div class=" row row-cols-1 row-cols-md-2 g-4">
  <div class="col ">
    <div class="card ">
      <div class="colorCard card-body  p-5 m-5  ">
        <h5 class="textCard fs-2 card-title text-black">Ciervo Colorado</h5>
        <img  src={logocard} class="logocard" alt="logo" />
        <p class="card-text text-black">Perfeccion en cada detalle..</p>
        <button type="button" class="boton">Mas Info</button>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card">
      
      <div class="colorCard card-body  p-5 m-5 ">
        <h5 class="textCard fs-2 card-title text-black">Axie</h5>
        <img  src={logocard1} class="logocard" alt="logo" />
        <p class="card-text text-black">Perfeccion en cada detalle..</p>
        <button type="button" class="boton">Mas Info</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="colorCard card-body p-5 m-5">
        <h5 class="textCard fs-2 card-title text-black">Jabali</h5>
        <img  src={logocard1} class="logocard" alt="logo" />
        
        <p class="card-text text-black ">Perfeccion en cada detalle..</p>
        <button type="button" class="boton">Mas Info</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="colorCard card-body  p-5 m-5">
        <h5 class="textCard fs-2 card-title text-black">Puma</h5>
        <img  src={logocard2} class="logocard" alt="logo" />
        
        <p class="card-text text-black">Perfeccion en cada detalle..</p>
        <button type="button" class="boton">Mas Info</button>
      </div>
    </div>
  </div>
</div>

      {/* <Item producto={productos[0]}>
      </Item>
      <h5> </h5>
      
      <Item producto={productos[1]}>
      
      </Item>
      
      <h5> </h5>
      <Item producto={productos[2]}>
      
      </Item> */}
      
    </div>
    
  )
}

export default ItemListContainer