import { useRef } from "react"

//UseRef es un hook que me permite crear una referencia mutable. 

//Ejemplo cantidad de productos comprados:

const UtilizamosUseRef = () => {
    const cantidadCarrito = useRef(0); 

    const agregarAlCarrito = () => {
        cantidadCarrito.current = cantidadCarrito.current + 1; 
        console.log(cantidadCarrito.current);
    }

  return (
    <div>
        <p>Productos Marolio en el carrito: {cantidadCarrito.current} </p>
        <button onClick={agregarAlCarrito}> Agregar al Carrito </button>
    </div>
  )
}

export default UtilizamosUseRef