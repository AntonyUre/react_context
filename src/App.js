import "./App.css";
import TodoApp from "./components/TodoApp";
import TodoListProvider from "./context/TodoListProvider";
import Login from "./components/Login";

function App() {
  return (
    <div className="container">
      <Login/>
      <TodoListProvider>
        <div className="todoBackground">
          <h2>To Do List</h2>
        </div>
        <TodoApp />
        <footer>
          <div class="footer-box">
            <p>
              Developed by
              <a href="#"> Antony U. </a>
              All rights reserved.
            </p>
          </div>
        </footer>
      </TodoListProvider>
    </div>
  );
}

export default App;
