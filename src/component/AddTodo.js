import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

/**
 * AddTodo Component
 * Provides a form interface for users to add new todo items
 * Manages local form state and handles submission to Redux store
 * 
 * @param {Function} addTodo - Redux action creator for adding todos
 * @returns {JSX.Element} Form component for adding todos
 */
const AddTodo = ({ addTodo }) => {
  // Local state for form input
  const [task, setTask] = useState("");
  
  // Local state for tracking submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles form submission
   * Validates input and dispatches addTodo action
   * 
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Don't submit if task is empty or only whitespace
    if (!task.trim()) return;
    
    // Set submitting state to show loading feedback
    setIsSubmitting(true);
    
    try {
      // Dispatch Redux action to add todo
      await addTodo(task);
      
      // Clear the input field after successful submission
      setTask("");
    } catch (error) {
      // Log error if todo addition fails
      console.error("Failed to add todo:", error);
    } finally {
      // Reset submitting state regardless of success/failure
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <div className="input-group">
        {/* Input field for todo task */}
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          disabled={isSubmitting}
        />
        
        {/* Submit button */}
        <button 
          type="submit" 
          className="add-button"
          disabled={!task.trim() || isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

// Connect component to Redux store
// null for mapStateToProps (no state needed)
// { addTodo } for mapDispatchToProps (action creator)
export default connect(null, { addTodo })(AddTodo); 