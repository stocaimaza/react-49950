import React from 'react'

//Programación sincrónica y asincrónica: 

//La programación sincrónica ejecuta una tarea a la vez, en orden secuencial. 

//La programación asincrónica ejecuta varias tareas al mismo tiempo, en orden no secuencial. 

//Para practicar podemos usar setTimeout. Recuerden que esta función trabaja con dos parametros: una función callback y un tiempo en milisegundos. 

//Promesas: son objetos que representan eventos a futuro, pero que se pueden cumplir o no. 
//En general representa el resultado eventual de una petición asíncrona. 

//Las promesas tienen tres estados: pendiente, cumplida o rechazada.



const Promesas = () => {
    //Programación sincrónica:
    console.log("Tarea 1"); 
    console.log("Tarea 2");

    //Programación asincrónica: 

    setTimeout( ()=> {
        console.log("Tarea A");
    }, )

    setTimeout( ()=> {
        console.log("Tarea B");
    }, 1000)

    //console.log("Tarea B");

     //Promesas: 

     const tusPromesas = (estado) => {
        return new Promise( (resolve, reject) => {
            if(estado) {
                resolve("Promesa cumplida, me llegó el karting!");
            } else {
                reject("Promesa rechazada, estoy traumado y no lo supero ");
            }
        })
     }

    //  console.log(tusPromesas(false));

     //THEN Y CATCH: 
     //Podemos concatenar dos métodos que me permiten ejecutar una función cuando la promesa se cumpla o se rechaza. 
     //THEN se ejecuta cuando la promesa se cumple. 
     //CATCH se ejecuta cuando la promse se rechaza. 
     //FINALLY se ejecuta siempre.

     tusPromesas(false)
        .then(respuesta => console.log(respuesta))
        .catch(error => console.error("Nos vamos a morir ", error))
        .finally( () => console.log("todo terminó señores, no tenemos escapatoria"))

    //Ahora practicamos con un array de datos: 
    const array = ["Tinki Winki", "Lala", "Po", "Dipsy"]; 

    const solicitarTeletubbies = (estado) => {
        return new Promise((resuelto, rechazado) => {
            if(estado) {
                resuelto(array);
            } else {
                rechazado("No hay teletubbies en la tele hoy");
            }
        })
    }

    solicitarTeletubbies(true)
        .then(respuesta => console.table(respuesta))
        .catch(error => console.error(error))
        .finally( () => console.log("Proceso terminado"))


  return (
    <div>Promesas</div>
  )
}

export default Promesas