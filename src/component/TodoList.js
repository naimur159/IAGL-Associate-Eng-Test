import React, {Component} from "react";
import Todo from "./Todo";
import {fetchTodos} from "../actions";
import {connect} from "react-redux";

/**
 * TodoList Component
 * Displays the list of todo items
 * Fetches todos from the API on component mount
 * Renders individual Todo components or empty state
 */
class TodoList extends Component {
  // Initialize component state
  state = {};

  /**
   * Lifecycle method called after component mounts
   * Fetches todos from the backend API
   */
  componentDidMount() {
    this.props.fetchTodos();
  }

  /**
   * Renders the todo list or empty state
   * @returns {JSX.Element} List of todos or empty state message
   */
  render() {
    // Extract todos from Redux state
    const {todos} = this.props.data;
    
    return (
      <ul className="todo-list">
        {todos && todos.length > 0
          ? todos.map((todo, index) => {
            // Render individual Todo component for each todo with index
            return <Todo key={`todo-${index}`} todo={todo} index={index} />;
          })
          : <li className="empty-state">No todos yet. Add your first task above!</li>}
      </ul>
    );
  }
}

/**
 * Maps Redux state to component props
 * @param {Object} state - Redux store state
 * @returns {Object} Props object with data and loading state
 */
const mapStateToProps = ({data = {}, isLoadingData = false}) => ({
  data,
  isLoadingData
});

// Connect component to Redux store
// mapStateToProps: Maps Redux state to component props
// { fetchTodos }: Maps action creators to component props
export default connect(
  mapStateToProps,
  {
    fetchTodos
  }
)(TodoList);