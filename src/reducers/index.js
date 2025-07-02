import { FETCH_TODOS } from "../actions/types";

/**
 * Root Reducer
 * Handles state updates based on dispatched actions
 * Manages the application's global state
 * 
 * @param {Object} state - Current application state
 * @param {Object} action - Action object with type and payload
 * @returns {Object} Updated state
 */
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      // Update the data property with new todos from API
      return { data: action.payload };
    default:
      // Return current state if action type doesn't match
      return state;
  }
}