import { useContador } from "../../hooks/useContador";
import { useFetch } from "../../hooks/useFetch";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const PracticaHooks = () => {
    const { contador, incrementar, decrementar} = useContador(1,10);

    const data = useFetch("https://jsonplaceholder.typicode.com/users");

    const [dataStorage, setDataStorage] = useLocalStorage("data", [])

    //función auxiliar: 

    const guardarData = () => {
        setDataStorage(data);
    }


  return (
    <div>
        <h2> Contador </h2>
        <button onClick={decrementar}> - </button>
        <strong> {contador} </strong>
        <button onClick={incrementar}> + </button>

        <hr />
        <br />

        <h2>Usuarios JSONPlaceHolder</h2>
        {data && data.map(usuario => <p key={usuario.id}> {usuario.name} </p>)}

        <h2>Guardamos datos en el LocalStorage</h2>

        <button onClick={guardarData}> Guardar Datos </button>

        {/* Si quieren mostrar en pantalla la data del localStorage pueden probar algo asi:   */}

        <p>Datos almacenados en LS: {JSON.stringify(dataStorage)} </p>


    </div>
  )
}

export default PracticaHooks