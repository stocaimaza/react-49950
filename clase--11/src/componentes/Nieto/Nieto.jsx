//UTILIZANDO PROPS

// const Nieto = ({herencia}) => {
//   return (
//     <div>
//         <h2>Hola, soy el nieto y me voy a gastar todo </h2>
//         <p>En efectivo: {herencia.efectivo} </p>
//         <p>Tengo estas casas: {herencia.propiedades} </p>
//         <p>Y tengo estos autos para chocar: {herencia.vehiculos} </p>
//     </div>
//   )
// }

// export default Nieto

//UTILIZANDO EL CONSUMER

//Importamos el contexto: 
//import { Contexto } from "../../context/context";

//Para poder acceder a la información utilizamos una función de renderizado. 

// const Nieto = () => {
//     return (
//       <Contexto.Consumer>
//         {
//             (herencia) => (
//                 <div>
//                     <p>Herencia en efectivo: {herencia.efectivo} </p>
//                     <p>Casas: {herencia.propiedades} </p>
//                     <p>Autos: {herencia.vehiculos} </p>
//                 </div>
//             )
//         }
//       </Contexto.Consumer>
//     )
//   }

//   export default Nieto

//UTILIZANDO UN HOOK:  En lugar de usar el consumer y una función de renderizado yo puedo utilizar un Hook qeu se llama useContext

//1) Importamos el contexto: 
import { Contexto } from "../../context/context";
//2) Importamos el Hook: 
import { useContext } from 'react';

const Nieto = () => {
    const herencia = useContext(Contexto);

    return (
        <div>
            <h2>Hola, estamos usando el Hook useContext </h2>
            <p>efectivo: {herencia.efectivo} </p>
            <p>casas: {herencia.propiedades} </p>
            <p>autos: {herencia.vehiculos} </p>
        </div>
    )
}

export default Nieto