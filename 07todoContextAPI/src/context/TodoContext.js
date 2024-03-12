import { createContext, useContext } from "react";

export const TodoContext = createContext({
    data: [
        {id: 1, name: "Todo List", isActive: false}
    ],
    saveHandler: (todo) => {},
    updateHandler: (id, todo) => {},
    destroyHandler: (id) => {},
    toggleStatusHandler: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}