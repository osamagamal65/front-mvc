import "./App.css";
import "./style.scss";
import { ListComponent } from "./components/list/list";
import { AddNewComponent } from "./components/add/add";
function App() {
  return (
    <div className="App container">
      <ListComponent></ListComponent>
      <AddNewComponent></AddNewComponent>
    </div>
  );
}

export default App;
