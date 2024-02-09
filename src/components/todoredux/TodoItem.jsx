import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDelete, setUpdate } from "../../redux/actions/actions";

const TodoItem = () => {
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div
      style={{ border: "1px solid black", margin: "5px", minHeight: "80vh" }}
    >
      {todos.map((todo) => (
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
                setUpdate({ id: todo.id, todo: "hello", completed: false })
              )
            }
          >
            Update
          </button>
          <button onClick={() => dispatch(setDelete(todo.id))}>Delete</button>
        </section>
      ))}
    </div>
  );
};

export default TodoItem;
