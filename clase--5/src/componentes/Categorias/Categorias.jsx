import { useState, useEffect } from "react";

const Categorias = () => {
   const [categoria, setCategoria]  = useState("Inicial"); 

   useEffect( () => {
        document.title = `Categoria ${categoria}`; 
   }, [categoria])


   const manejadorCategoria = (categoria) => {
        setCategoria(categoria);
   }
  return (
    <div>
        <h2> Categoría de Productos </h2>
        <button onClick={() => manejadorCategoria("Frutas")}> Frutas </button>
        <button onClick={() => manejadorCategoria("Carnes")}> Carnes </button>
        <button onClick={() => manejadorCategoria("Lacteos")}> Lacteos </button>
        <button onClick={() => manejadorCategoria("Limpieza")}> Limpieza </button>
    </div>
  )
}

export default Categorias