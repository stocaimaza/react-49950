import { useState } from "react";
import emailjs from "emailjs-com";


//1) Primero tienen que instalar: npm install emailjs-com

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    

    const enviarMensaje = (e) => {
        e.preventDefault(); 

        const templateParams = {
            from_name: nombre, 
            from_email: email,
            message: mensaje
        };

        emailjs.send("service_0a8pgul", "template_kif3nll", templateParams, "X8yFIvDIkcl0XbVSo")
            .then(respuesta => {
                console.log("Mensaje enviado", respuesta)
            })
            .catch(error => {
                console.log("No se puede enviar ", error )
            })

        setNombre("");
        setEmail("");
        setMensaje("");

    }

  return (
    <form onSubmit={enviarMensaje}>
        <label htmlFor=""> Nombre: </label>
        <input type="text" onChange={(e)=> setNombre(e.target.value)} />

        <label htmlFor=""> Email: </label>
        <input type="text" onChange={(e)=> setEmail(e.target.value)} />

        <label htmlFor=""> Mensaje: </label>
        <textarea name="" onChange={(e)=> setMensaje(e.target.value)}></textarea>

        <button type="submit"> Enviar mensaje </button>
    </form>
  )
}

export default ContactForm