import React from "react";
import TodoList from "./component/TodoList";
import AddTodo from "./component/AddTodo";
import "./styles.css";

/**
 * Main Todo Application Component
 * Serves as the root component that orchestrates the todo application
 * Contains the main layout and renders child components
 * 
 * @returns {JSX.Element} The main todo application UI
 */
export default function TodoApp() {
  return (
    <div className="todo-app">
      <div className="todo-container">
        {/* Application title */}
        <h1>Todo List</h1>
        
        {/* Component for adding new todos */}
        <AddTodo />
        
        {/* Component for displaying the list of todos */}
        <TodoList />
      </div>
    </div>
  );
}