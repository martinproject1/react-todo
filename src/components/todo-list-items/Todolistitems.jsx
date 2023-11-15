import TodoListItem from "../todo-list-item/TodoListitem";

const TodoListItems = ({ todos, noRemoveTodo }) => {
    return (
        <div className="todo-list-items">
            <TodoListItem todos={todos} noRemoveTodo={noRemoveTodo}/>
        </div>
    );
};

export default TodoListItems;