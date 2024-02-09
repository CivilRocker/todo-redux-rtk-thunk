import React, { useState, useRef } from "react";
import { addTodo, setDelete } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  // console.log(todos);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: Date.now(), todo, completed: false }));
    setTodo("");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>TodoList-Redux</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          name="task"
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
        <button type="submit" style={{ padding: "5px", margin: "5px" }}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoList;
