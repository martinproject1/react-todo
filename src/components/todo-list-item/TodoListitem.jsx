const TodoListItem = ({ todos, noRemoveTodo }) => {
    return todos.map(todo => {
        return (
                <div className="todo-list-item" key={todo.id}>
                <label>
                    <input 
                       type="checkbox"
                    />
                    <span>{todo.text}</span>
                </label>
                <button onClick={() => noRemoveTodo(todo.id)}>
                    Remove
                </button>
            </div>
        )
    });        
};

export default TodoListItem;