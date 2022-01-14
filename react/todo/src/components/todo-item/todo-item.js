import React, { useState } from "react";
import { setTodo, useTodo } from "../../services/store_service";
export function TodoItem(props) {
  const [state, setState] = useState(props.todo.checked ?? false);
  var todos = useTodo();
  let indexOfItem = todos.findIndex((e) => e["id"] === props.todo.id);

  function save() {
    if (indexOfItem != null) {
      todos[indexOfItem] = { ...todos[indexOfItem], checked: !state };
      setTodo(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log(todos);
      setState(todos[indexOfItem]["checked"]);
    }
  }
  function remove() {
    setTodo(todos.filter((e) => e.id !== props.todo.id));
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((e) => e.id !== props.todo.id))
    );
  }
  return (
    <li className="todo-item m-y-1 d-flex flex-space-between flex-flow-row">
      <div className="d-flex flex-start flex-flow-row">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={state}
            onChange={() => {
              save();
            }}
          />
          <span className="checkmark"></span>
        </label>

        <div className="title d-flex flex-flow-column">{props.todo.title}</div>
      </div>
      <span className="flex-end" onClick={remove}>
        X
      </span>
    </li>
  );
}
