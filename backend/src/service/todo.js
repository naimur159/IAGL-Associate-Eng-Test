/**
 * Todo Service Layer
 * Handles business logic for todo operations
 * Acts as an intermediary between the API layer and repository layer
 * 
 * @param {Object} repository - The todo repository instance
 * @returns {Object} Service object with todo operations
 */
const todoService = (repository) => {
  return {
    /**
     * Retrieves all todos from the repository
     * @returns {Promise<Object>} Promise resolving to todos object
     */
    getTodos: async () => {
      return await repository.getTodos()
    },
    
    /**
     * Adds a new todo to the repository
     * @param {string} task - The todo task description
     * @returns {Promise<Object>} Promise resolving to updated todos object
     */
    addTodo: async (task) => {
      return await repository.addTodo(task)
    }
  };
};

module.exports = todoService;