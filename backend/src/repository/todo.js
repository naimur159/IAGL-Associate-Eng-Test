/**
 * In-memory storage for todos
 * In a production environment, this would be replaced with a database
 */
let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    }
  ]
};

/**
 * Todo Repository Layer
 * Handles data persistence and retrieval for todo items
 * Currently uses in-memory storage (would be database in production)
 */
module.exports = {
  /**
   * Retrieves all todos from storage
   * @returns {Promise<Object>} Promise resolving to todos object
   */
  getTodos: () => Promise.resolve(todoList),
  
  /**
   * Adds a new todo to storage
   * @param {string} task - The todo task description
   * @returns {Promise<Object>} Promise resolving to updated todos object
   */
  addTodo: (task) => {
    // Create new todo object
    const newTodo = { task };
    
    // Add to the in-memory array
    todoList.todos.push(newTodo);
    
    // Return the updated todo list
    return Promise.resolve(todoList);
  }
};