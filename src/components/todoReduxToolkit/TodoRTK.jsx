import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRtk, updateRtk } from "../../reduxToolkit/todoSlice";

const TodoRTK = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div
      style={{ border: "1px solid black", margin: "5px", minHeight: "80vh" }}
    >
      {todos &&
        todos.map((todo) => (
          <section
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <input type="checkbox" />
            {isEdit ? (
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            ) : (
              <p style={{ display: "inline-block" }}>{todo.todo}</p>
            )}
            <button
              onClick={() =>
                dispatch(
                  updateRtk({ id: todo.id, todo: "hello", completed: false })
                )
              }
            >
              Update
            </button>
            <button onClick={() => dispatch(deleteRtk(todo.id))}>Delete</button>
          </section>
        ))}
    </div>
  );
};

export default TodoRTK;
