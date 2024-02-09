import {
    actionTypes
} from "./actionTypes"

export const addTodo = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: todo
    }
}

export const setDelete = (id) => {
    return {
        type: actionTypes.REMOVE_TODO,
        payload: id
    }
}

export const setUpdate = (todo) => {
    return {
        type: actionTypes.UPDATE_TODO,
        payload: todo
    }
}

export const setToggle = (id) => {
    return {
        type: actionTypes.TOGGLE_COMPL,
        payload: id
    }
}