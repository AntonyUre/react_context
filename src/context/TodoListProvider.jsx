import React, { createContext, useState } from "react";
export const TodoListContext = createContext();

const TodoListProvider = (props) => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function handleSubmit(e) {
    
    e.preventDefault();
    if (title.trim() !== '') {
      const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        complete: false,
      };
      const temp = [...todos];
      temp.unshift(newTodo);
  
      setTodos(temp);
  
      setTitle("");
    } else { 
      alert("Ingresar un valor válido")
    }
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return <TodoListContext.Provider value={{title, setTitle, todos, setTodos, handleChange, handleSubmit, handleUpdate, handleDelete}}>{props.children}</TodoListContext.Provider>;
};

export default TodoListProvider;
