import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello World!"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        destroyTodo: (state, action) => {
            state.todos = state.todos.filter(todo=>
                todo.id != action.payload);
        }
    }
});

export const {saveTodo, destroyTodo} = todoSlice.actions;

export default todoSlice.reducer;