import {useState} from "react";

const BotonEncendido = ({render}) => {

    const [onOff, setOnOff] = useState(false);

    const manejadorBoton = () => {
        setOnOff(!onOff);
    }

  return (
    <div>
        {render({onOff, manejadorBoton})}
    </div>
  )
}

export default BotonEncendido