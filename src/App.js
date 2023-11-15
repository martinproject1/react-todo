import { useReducer } from "react";

import TodoHeader from "./components/todo-header/TodoHeader";
import TodoListItems from "./components/todo-list-items/Todolistitems";
import TodoFooter from "./components/todo-footer/TodoFooter";

const reducer = (todos, action) => {
  if (action.type === "ADD") {
    return [
      ...todos,
      {
        id: new Date().getTime(),
        text: action.payload.text,
        isCompleted: false
      }
    ];
  }else if (action.type === "REMOVE") {
    return todos.filter(todo => todo.id !== action.payload.id);
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div className="App">
      <TodoHeader
        onADDTodo={(text) =>{
          dispatch({
            type: "ADD",
            payload: {
              text
            }
          });
        }}
      />
      <TodoListItems
        todos={todos}
        noRemoveTodo={(id) => {
          dispatch({
            type: "REMOVE",
            payload: {
              id
            }
          });
        }}
      />nuiu
      <TodoFooter/>
    </div>
  );
}

export default App;