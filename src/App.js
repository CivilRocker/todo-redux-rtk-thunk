import "./App.css";
import TodoList from "./components/todoredux/TodoList";
import TodoItem from "./components/todoredux/TodoItem";
import TodoRTK from "./components/todoReduxToolkit/TodoRTK";
import TodoListRTK from "./components/todoReduxToolkit/TodoListRTK";
import DisplayProducts from "./components/products/DisplayProducts";
import { Provider } from "react-redux";
import store from "./redux/store";
import { rtkStore } from "./reduxToolkit/store";

function App() {
  return (
    <div className="app">
      <div className="app-redux">
        <Provider store={store}>
          <TodoList />
          <TodoItem />
        </Provider>
      </div>
      <div className="app-rtk">
        <Provider store={rtkStore}>
          <TodoListRTK />
          <TodoRTK />
        </Provider>
      </div>
      <div className="app-display">
        <DisplayProducts />
      </div>
    </div>
  );
}

export default App;
