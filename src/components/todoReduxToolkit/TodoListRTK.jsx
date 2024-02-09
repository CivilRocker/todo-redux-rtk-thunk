import React,{useState} from 'react';
import { addRtk } from '../../reduxToolkit/todoSlice';
import { useDispatch } from 'react-redux';

const TodoListRTK =()=>{
  const [todo, setTodo] = useState("");
  // console.log(todos);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRtk({ id: Date.now(), todo, completed: false }));
    setTodo("");
  };
    return(
        <div style={{ textAlign: "center" }}>
        <h1>TodoList-Redux</h1>
        <form onSubmit={handleSubmit}>
          <input
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
            type="text"
            placeholder="Please Enter Todo.."
            style={{
              width: "70%",
              height: "30px",
              margin: "5px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          />
          <button style={{ padding: "5px",margin:"5px" }}>Add Task</button>
        </form>
      </div>
    )
}

export default TodoListRTK;