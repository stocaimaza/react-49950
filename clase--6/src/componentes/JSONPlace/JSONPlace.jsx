import { useEffect, useState } from "react";

const JSONPlace = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>Usuarios: </h2>
            <ul>
                {
                    usuarios.map(usuario => {
                        return (
                            <li key={usuario.id}>
                                {usuario.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default JSONPlace