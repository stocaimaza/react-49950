import React from 'react'
import './EstilosCondicional.css';

//Podemos usar los estilos condicionales en linea y también los podemos aplicar con clases. 

const EstilosCondicional = ({booleano, clase}) => {
  return (
    <div>
        <h4 style={{color: booleano ? "red" : "green"}} >Estilos condicional</h4>
        <h4 className={booleano ? "amarillo" : "azul"}  > Trabajamos con Clases </h4>
        <h4 className={booleano && "azul"}>Ejemplo con el operador && </h4>
        <h4 className ={ clase }> Recibo una clase por props </h4>
    </div>
  )
}

export default EstilosCondicional