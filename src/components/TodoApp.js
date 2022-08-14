import React, { useContext} from "react";
import Todo from "./Todo";
import "./todoApp.css";
import { TodoListContext } from "../context/TodoListProvider";

const TodoApp = () => {
  const {
    handleSubmit,
    handleChange,
    title,
    handleUpdate,
    todos,
    handleDelete,
  } = useContext(TodoListContext);
  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          placeholder="Escribe un tarea"
          onChange={handleChange}
          value={title}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          value="+"
          className="todoInputBtn"
        />
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
