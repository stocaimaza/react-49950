import { useState } from "react";
import './Eventos.css';

const Eventos = () => {
    const [input, setInput] = useState("");

    //Funciones auxiliares: 
    const manejadorClick = () => {
        console.log("Click!");
    }

    const manejadorInput = (event) => {
        //Voy a trabajar con el objeto "event"
        setInput(event.target.value)
        //La propiedad target es la referencia al objeto del DOM que dispara el evento. 
        //Value es el texto que ingresa en usuario
        console.log(input);
    }



  return (
    <div>
        {/* Eventos del Micky Mouse - OnClick */}
        <button onClick={manejadorClick}> Haceme click </button>

        <div className="caja"
            onMouseMove = {() => console.log("Pasaste el micky mouse por la caja!")}
            onMouseEnter={ () => console.log("Ingresaste a la caja!")}
            onMouseLeave={ () => console.log("Te fuiste de la caja! ")}
        ></div>

        {/* Eventos del Teclado - onChange, onKeyDown, onKeyUp */}

        <form>
            <h2> {input} </h2>

            <label htmlFor="campo"> Ingrese texto </label>
            <input type="text" id="campo"
                onChange={manejadorInput}
                onKeyDown={ () => console.log("Presionaste una tecla!")}
                onKeyUp={ () => console.log("Soltaste una tecla!")}
            />
        </form>

        {/* htmlFor = es igual al for que usamos en html */}
        {/* change = se dispara cuando el usuario cambia el valor del input */}
        {/* keyDown = se dispara cuando presionamos una tecla */}
        {/* keyUp = se dispara cuando soltamos una tecla */}

    </div>
  )
}

export default Eventos