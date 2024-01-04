import { useState, useEffect } from "react"; 

//El efecto primario de React es renderizar componentes, peeeero una aplicación debe realizar otras operaciones además de mostrarse, consumir datos de un servidor, usar eventos. etc. 

//Vamos a trabajar con useEffect que me permite controlar los efectos secundarios provocados por el cambio de estado. 

const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial); 
    const [color, setColor] = useState("black");

    useEffect( () => {
        document.title = `Contador ${contador}`
        {
            // Y si cuando llega el contador a 5 me cambia el color del botón. 
            //Esto no es lo mas recomendado  en React porque estoy accediendo directamente al DOM. Y no se considera una buena practica. Lo mejor es delegar el trabajo de modificar a React. 
            //if(contador === 5){
            //document.getElementById("boton").style.color = "red";
            //}
        }

        if( contador > 5 ){
            setColor("red");
        } else {
            setColor ("black");
        }
        


    }, [contador] )

    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }


    const disminuirContador = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

  return (
    <div>
        <h2> Mi Contador</h2>

        <button onClick={disminuirContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={aumentarContador}> + </button>

        <button id="boton" style={ {color: color} }> Agregar al Carrito </button>
    </div>
  )
}

export default Contador