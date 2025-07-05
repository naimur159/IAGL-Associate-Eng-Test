import React from "react";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";

/**
 * Todo Component
 * Renders a single todo item with delete and complete functionality
 * 
 * @param {Object} props - Component props
 * @param {Object} props.todo - The todo object with task and completed status
 * @param {number} props.index - The index of the todo in the list
 * @param {Function} props.deleteTodo - Redux action to delete todo
 * @param {Function} props.updateTodo - Redux action to update todo
 * @returns {JSX.Element} Individual todo item with controls
 */
const Todo = ({ todo, index, deleteTodo, updateTodo }) => {
  /**
   * Handles the completion toggle
   */
  const handleToggleComplete = () => {
    updateTodo(index, !todo.completed);
  };

  /**
   * Handles the delete action
   */
  const handleDelete = () => {
    deleteTodo(index);
  };

  return (
    <li className={todo.completed ? "todo-item completed" : "todo-item"}>
      <div className="todo-content">
        {/* Checkbox for completion */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="todo-checkbox"
        />
        
        {/* Todo text */}
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.task}
        </span>
      </div>
      
      {/* Delete button */}
      <button 
        onClick={handleDelete}
        className="delete-button"
        title="Delete todo"
      >
        ×
      </button>
    </li>
  );
};

// Connect component to Redux store
export default connect(null, { deleteTodo, updateTodo })(Todo);