import { actionTypes } from "../actions/actionTypes"
const initialState ={
    todos:[]
}

export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_TODO:{
            return {...state,todos:[...state.todos,action.payload]}
        };
        case actionTypes.REMOVE_TODO:{
            return{
                ...state,
                todos:state.todos.filter((item)=>item.id!==action.payload)
            }
        };
        case actionTypes.UPDATE_TODO:{
            return {...state,todos:state.todos.map((item)=>item.id===action.payload.id?{...item,todo:action.payload.todo}:item)}
        }
        default:
            return state
    }
}