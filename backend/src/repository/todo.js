/**
 * In-memory storage for todos
 * In a production environment, this would be replaced with a database
 */
let todoList = {
  todos: [
    {
      "task": "This is a todo example",
      "completed": false
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
    // Create new todo object with completed status
    const newTodo = { 
      task,
      completed: false
    };
    
    // Add to the in-memory array
    todoList.todos.push(newTodo);
    
    // Return the updated todo list
    return Promise.resolve(todoList);
  },

  /**
   * Deletes a todo from storage by index
   * @param {number} id - The index of the todo to delete
   * @returns {Promise<Object>} Promise resolving to updated todos object
   */
  deleteTodo: (id) => {
    // Remove todo at the specified index
    todoList.todos.splice(id, 1);
    
    // Return the updated todo list
    return Promise.resolve(todoList);
  },

  /**
   * Updates a todo's completed status
   * @param {number} id - The index of the todo to update
   * @param {boolean} completed - Whether the todo is completed
   * @returns {Promise<Object>} Promise resolving to updated todos object
   */
  updateTodo: (id, completed) => {
    // Update the completed status of the todo at the specified index
    if (todoList.todos[id]) {
      todoList.todos[id].completed = completed;
    }
    
    // Return the updated todo list
    return Promise.resolve(todoList);
  }
};