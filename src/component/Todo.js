import React from "react";

/**
 * Todo Component
 * Renders a single todo item
 * Simple presentational component that displays the todo text
 * 
 * @param {Object} props - Component props
 * @param {string} props.todo - The todo task text to display
 * @returns {JSX.Element} Individual todo item
 */
const Todo = ({ todo }) => (
  <li>
    <span className="todo-item">
      {todo}
    </span>
  </li>
);

export default Todo;