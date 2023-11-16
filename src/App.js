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
  } 
  
  else if (action.type === "REMOVE") {
    return todos.filter(todo => todo.id !== action.payload.id);
  
  } 
  
  else if (action.type === "COMPLETED") {
    return todos.map(todo => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }

      return todo;
    });
  }

  else if (action.type === "REMOVE_ALL_COMPLETED") {
    return todos.filter(todo => !todo.isCompleted);
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div className="todo-app">
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
     {
      todos.length > 0 ?
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
      onCompletedTodo={(id) => {
        dispatch({
          type: "COMPLETED",
          payload: {
            id
          }
        });
      }}
    />
    :
     // <p>Todo is not defined</p>
     null
     }

        {
          todos.length > 0 ?
          <TodoFooter
       todos={todos.length}
       completedTodos={todos.filter(todo => todo.isCompleted).length}
       onRemoveAllCompletedTodos={() => {
          dispatch({
              type: "REMOVE_ALL_COMPLETED"
          });
       }}
       />
      :
      null
      
        }

        
    </div>
  );
}

export default App;