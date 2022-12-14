import { AddTaskBtn } from "./AddTaskBtn";
import { SelectMenu } from "./SelectMenu";

export function AppContainer() {
  return (
    <div className="app-container">
      <h1>ToDo List</h1>
      <AddTaskBtn />
      <SelectMenu />
    </div>
  );
}
