//useParams, este es un hook que me permite acceder a los parámetros de las URL. 

//Por ejemplo: https://www.cellshop.com/silla/10
//Yo puedo capturar ese 10 y usarlo en mi aplicación. 

import { useParams } from "react-router-dom";

const Sillas = () => {
    const {id} = useParams();
    //Obtener el valor del parámetro y lo voy a desestructurar. 
    //Ahora yo puedo trabajar con ese dato "id".
  return (
    <div>
        <h2>Sillas Gamer</h2>
        <p>Mirando el producto ID: {id} </p>
    </div>
  )
}

export default Sillas