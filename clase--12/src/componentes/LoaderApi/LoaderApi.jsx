import { useState, useEffect } from "react";

//En este ejemplo, generamos un loader mientras esperamos que JSONPlaceHolder me retorne la lista de  usuarios. 


const LoaderApi = () => {
    const [loader, setLoader] = useState(true);
    const [usuarios, setUsuarios] = useState([]);

    useEffect( () => {
        setTimeout( () => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsuarios(data);
                setLoader(false);
                console.log(usuarios);
            })
        }, 4000)
    }, [])
  return (
    <div>
        <h2>Usuarios de JSONPlaceHolder</h2>

        {loader ? <h2>Cargando data!</h2> : <h2>Usuarios generados!</h2>}
        <ul>
            {
                usuarios.map(usuario => (
                    <li key= {usuario.id}> {usuario.name} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default LoaderApi