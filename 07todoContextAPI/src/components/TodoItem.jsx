import { useState } from "react";
import { useTodoContext } from "../context";

function TodoItem({ todo }) {
    const [toggleIsActive, setToggleIsActive] = useState(false);
    const [todoName, setTodoName] = useState(todo.name);
    const {updateHandler, destroyHandler, toggleStatusHandler} = useTodoContext();
    
    const updateTodoHandler = () => {
        updateHandler(todo.id, {...todo, name: todoName});
        setToggleIsActive(false);
    }

    const onChangeStatusHandler = () => {
        toggleStatusHandler(todo.id);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 w-full  text-black ${
                todo.isActive ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isActive}
                onChange={onChangeStatusHandler}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    toggleIsActive ? "border-black/10 px-2" : "border-transparent"
                } ${todo.isActive ? "line-through" : ""}`}
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
                readOnly={!toggleIsActive}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.isActive) return;

                    if (toggleIsActive) {
                        updateTodoHandler();
                    } else setToggleIsActive((prev) => !prev);
                }}
                disabled={todo.isActive}
            >
                {toggleIsActive ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => destroyHandler(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
