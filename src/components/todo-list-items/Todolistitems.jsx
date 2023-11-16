import TodoListItem from "../todo-list-item/TodoListitem";

const TodoListItems = ({ todos, noRemoveTodo, onCompletedTodo }) => {
    return (
        <div className="todo-list-items">
            <TodoListItem
             todos={todos} 
             noRemoveTodo={noRemoveTodo}
             onCompletedTodo={onCompletedTodo} 
            />
        </div>
    );
};

export default TodoListItems;