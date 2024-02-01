import { useEffect } from "react";
import { db } from "../../services/config";
import { collection, doc, setDoc } from "firebase/firestore";

const CargarJson = () => {

    useEffect(() => {
        const cargarUnArchivo = async () => {
            try {
                const res = await fetch("./alumnos.json");
                const jsonData = await res.json();

                jsonData.forEach(async (usuario) => {
                    const usuarioDoc = doc(collection(db,"alumnos"), usuario.id.toString());
                    await setDoc(usuarioDoc, usuario);
                })

            } catch (error) {
                console.log("noooo, auxilio", error);
            }
        }
        cargarUnArchivo();
    }, [])



    return (
        <div>CargarJson</div>
    )
}

export default CargarJson