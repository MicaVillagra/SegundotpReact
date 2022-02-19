import React from 'react'


const Item = ({producto, children}) => {
  return (
    <div style={{border:"solid black"}}>
        <h3 className='itemNom'>{producto.nombre} </h3>
        
        <h4 className='itemPre'>{producto.precio}</h4>
        {children}
    </div>
  )
}

export default Item