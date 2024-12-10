import { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editableDt, setEditableDt] = useState("");

  let height = document.documentElement.clientHeight;
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      <hr className="mt-4 mx-3" />
      <div className="ml-4 mt-4 text-[#858992] font-medium text-[16px]">
        TO DO
      </div>
      <TodoList
        listData={todoList}
        setTodoList={setTodoList}
        setEditableDt={setEditableDt}
      />
      <AddTask
        setTodoList={setTodoList}
        editableDt={editableDt}
        setEditableDt={setEditableDt}
      />
    </div>
  );
}

export default App;
