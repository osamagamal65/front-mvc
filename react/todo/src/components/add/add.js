import React, { useState } from "react";
import { setTodo, useTodo } from "../../services/store_service";

export function AddNewComponent(props) {
  let todos = useTodo();

  const [state, setState] = useState("");
  const onAdd = () => {
    const newList = [
      ...todos,
      {
        title: state,
        id: todos.length,
        description: "Item " + todos.length + " description",
        checked: false,
      },
    ];
    setTodo(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
    setState("");
  };
  return (
    <div className="add-form m-2 p-2  d-flex flex-flow-column">
      <input
        type="text"
        className="input m-x-0 m-y-3 input-block title"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      ></input>
      <button className="btn btn-success btn-block " onClick={onAdd}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
}
