import { useState } from "react";

const TodoHeader = ({ onADDTodo }) => {
    const [value, setValue] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (value !== "") {
            onADDTodo(value);
        }
        setValue("");
    };

    return (
        <div className="todo-header">
            <form>
                <input 
                type="text"
                placeholder="Type here..."
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <button onClick={onFormSubmit}>
                    ADD
                </button>
            </form>
        </div>
    );
};

export default TodoHeader;