import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";

export const [todoChanges$, setTodo] = createSignal();

export const [useTodo, todos$] = bind(
  todoChanges$,
  JSON.parse(localStorage.getItem("todos") ?? "[]")
);
