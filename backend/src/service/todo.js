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
    },

    /**
     * Deletes a todo from the repository by index
     * @param {number} id - The index of the todo to delete
     * @returns {Promise<Object>} Promise resolving to updated todos object
     */
    deleteTodo: async (id) => {
      return await repository.deleteTodo(id)
    },

    /**
     * Updates a todo's completed status
     * @param {number} id - The index of the todo to update
     * @param {boolean} completed - Whether the todo is completed
     * @returns {Promise<Object>} Promise resolving to updated todos object
     */
    updateTodo: async (id, completed) => {
      return await repository.updateTodo(id, completed)
    }
  };
};

module.exports = todoService;