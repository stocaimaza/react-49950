import React from 'react'
//Return temprano: 

//Esta técnica la usamos en JS y es cuando evitamos colocar el ELSE.

//Función booleana que me dice si es fin de semana. 

function esFinDe(dia) {
    if( dia === "sabado" || dia === "domingo") {
        return true; 
    } else {
        return false; 
    }
}
//Peeeeeeero si aplica la técnica del return temprano: 

function esFinDeSemana(dia) {
    if(dia === "sabado" || dia === "domingo") {
        return true; 
    }
    return false; 
}

const TecnicaUno = ({nombre}) => {
    if(nombre === "Samuel") {
        return <h1>Hola Administrador!</h1>
    }
    return <h2>Hola {nombre} </h2>
}

export default TecnicaUno