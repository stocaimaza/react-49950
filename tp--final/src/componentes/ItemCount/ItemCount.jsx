import { useState } from "react";
import './ItemCount.css';


const ItemCount = ({inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(1);


    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }


  return (
    <>
    <div>
        <button className="miBtn" onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button className="miBtn" onClick={incrementar}> + </button>
    </div>
      <button className="miBtn" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
    </>
  )
}

export default ItemCount