import { useState } from "react";
import { useTodoContext } from "../context";

function TodoForm() {
    
    const [todoName, setTodoName] = useState("");
    const {saveHandler} = useTodoContext();

    const saveTodoHandler = (e) => {
        e.preventDefault();
        if(!todoName) return;

        saveHandler({name: todoName, isActive: false});
        setTodoName("");
    }

    return (
        <form onSubmit={(e)=>saveTodoHandler(e)}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoName}
                onChange={(e)=>setTodoName(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

