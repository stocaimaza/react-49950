import { useState, useEffect } from "react"; 
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const [inputValue, setInputValue] = useState(""); 

    const [todos, setTodos] = useState( () => {
        const guardoTodos = localStorage.getItem("todos");
        if(guardoTodos) {
            return JSON.parse(guardoTodos);
        } else {
            return [];
        }
    }); 

    useEffect( ()=> {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    //Funciones auxiliares: 

    const borrarTodo = (todoABorrar) => {
        const actualizarTodos = todos.filter((todo) => todo !== todoABorrar)
        setTodos(actualizarTodos);
    }

    const agregarTodo = (texto) => {
        setTodos([...todos, texto])
        //Usamos el operador spread. 
    }


    const manejadorSubmit = (e) => {
        e.preventDefault(); 
        //Evitar el comportamiento por default del formulario. 

        if(inputValue.trim()) {
            agregarTodo(inputValue);
            setInputValue("");
        }

        //Guardamos la lista de tareas en el localStorage cada vez que cambia el estado todo: 

        

    }

  return (
    <div>
        <h1>Lista de tareas pendientes</h1>
        <form onSubmit={manejadorSubmit}>
            <input type="text" placeholder="Ingrese una terea" onChange={(e)=> setInputValue(e.target.value)}  value={inputValue}/>
            <button type="submit"> Agregar </button>
        </form>

        <ul>
            {
                todos.map(todo => (
                    <TodoItem 
                        todo = {todo} 
                        borrarTodo={borrarTodo}
                    />
                ))
            }
        </ul>

    </div>
  )
}

export default TodoList