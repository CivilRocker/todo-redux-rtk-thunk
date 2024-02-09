import {
    createSlice
} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoApp",
    initialState: {
        todos: []
    },
    reducers: {
        addRtk: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteRtk: (state, action) => {
            const finalTodos = state.todos.filter((todo) => todo.id !== action.payload);
            state.todos = finalTodos;
        },
        updateRtk: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {
                ...todo,
                todo: action.payload.todo
            } : todo)
        }
    }
})


export const {
    addRtk,
    deleteRtk,
    updateRtk
} = todoSlice.actions;

export default todoSlice.reducer;