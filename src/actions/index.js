import axios from "axios";
import { FETCH_TODOS, ADD_TODO } from "./types";

/**
 * Action Creator: Fetch Todos
 * Dispatches an async action to retrieve todos from the backend API
 * Uses Redux Thunk for handling async operations
 * 
 * @returns {Function} Thunk function that dispatches actions
 */
export function fetchTodos() {
  return function(dispatch) {
    // Make HTTP GET request to fetch todos
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      // Dispatch action with fetched data
      dispatch(setTodos(data));
    });
  };
}

/**
 * Action Creator: Add Todo
 * Dispatches an async action to add a new todo to the backend
 * Uses Redux Thunk for handling async operations
 * 
 * @param {string} task - The todo task description
 * @returns {Function} Thunk function that dispatches actions
 */
export function addTodo(task) {
  return function(dispatch) {
    // Make HTTP POST request to add new todo
    return axios.post("http://localhost:9091/api/todo", { task }).then(({ data }) => {
      // Dispatch action with updated todos data
      dispatch(setTodos(data));
    });
  };
}

/**
 * Action Creator: Set Todos
 * Creates an action to update the todos in the Redux store
 * 
 * @param {Object} data - The todos data from the API
 * @returns {Object} Action object with type and payload
 */
function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}