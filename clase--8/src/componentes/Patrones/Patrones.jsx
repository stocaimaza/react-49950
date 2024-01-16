import React from 'react'
/*
PATRONES DE DISEÑO: 

// En React tenemos algunos patrones de diseño que nos permite reutilizar componentes. 

//1) High Order Components ( HOC )
//2) Render props

//Una función que toma como argumento un componente y devuelve un nuevo componente con una funcionalidad adicional. 


*/

//Ejemplo: una función que recibe por parámetro un componente Mensaje( el cual tiene un texto), le agrego un titulo, y retorno un nuevo componente: 

export const mensajeConTitulo = (Mensaje) => {
    return function() {
        return (
            <>
                <h2>Titulo Agregado</h2>
                <Mensaje/>
            </>            
        )
    }
}


const Patrones = () => {
  return (
    <div>Patrones</div>
  )
}

export default Patrones