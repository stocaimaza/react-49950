import { useEffect } from "react";

const Escuchadores = () => {

    useEffect(() =>  {

        function hagoClick() {
            console.log("click");
        }

        window.addEventListener("click", hagoClick)

        //Lo eliminamos: 
        return () => {
            window.removeEventListener("click", hagoClick);
        }
    }, []) 

  return (
    <div>Escuchadores</div>
  )
}

export default Escuchadores