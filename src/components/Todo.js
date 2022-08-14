import "./todo.css";
import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdate() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdate}>
          <i class="fa-solid fa-check"></i>
        </button>
      </form>
    );
  }
  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <div className="todoBoxBtn">
          <button onClick={() => setIsEdit(true)}>
            <i class="fa-solid fa-pen"></i>
          </button>
          <button onClick={() => onDelete(item.id)}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
