import { useTodo } from "../../services/store_service";
import { TodoItem } from "../todo-item/todo-item";

export function ListComponent() {
  var todos = useTodo();
  const list = todos.map((e, i) => (
    <TodoItem key={i} todo={e}>
      {e.title}
    </TodoItem>
  ));
  return <ul>{list}</ul>;
}
