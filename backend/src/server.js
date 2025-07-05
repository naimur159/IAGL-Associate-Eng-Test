const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

/**
 * Creates and configures the Express server with API endpoints
 * @returns {Express} Configured Express server instance
 */
const server = () => {
  // Create Express server instance
  const server = express();
  
  // Middleware configuration
  server.use(express.json()); // Parse JSON request bodies
  server.use(cors()); // Enable CORS for cross-origin requests

  /**
   * GET /api/todo
   * Retrieves all todo items from the database
   * @returns {Object} JSON response containing array of todos
   */
  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  /**
   * POST /api/todo
   * Creates a new todo item
   * @param {Object} req.body - Request body containing task
   * @param {string} req.body.task - The todo task description
   * @returns {Object} JSON response with updated todos array
   */
  server.post('/api/todo', async (req, res) => {
    try {
      const { task } = req.body;
      
      // Validate that task is provided and not empty
      if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' });
      }
      
      // Add the todo and return the updated list
      const result = await todoService.addTodo(task.trim());
      res.status(201).json(result);
    } catch (error) {
      // Handle any errors during todo creation
      res.status(500).json({ error: 'Failed to add todo' });
    }
  });

  /**
   * DELETE /api/todo/:id
   * Deletes a todo item by its index
   * @param {string} req.params.id - The index of the todo to delete
   * @returns {Object} JSON response with updated todos array
   */
  server.delete('/api/todo/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id) || id < 0) {
        return res.status(400).json({ error: 'Invalid todo ID' });
      }
      
      const result = await todoService.deleteTodo(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete todo' });
    }
  });

  /**
   * PUT /api/todo/:id
   * Updates a todo item (marks as completed/uncompleted)
   * @param {string} req.params.id - The index of the todo to update
   * @param {Object} req.body - Request body containing completed status
   * @param {boolean} req.body.completed - Whether the todo is completed
   * @returns {Object} JSON response with updated todos array
   */
  server.put('/api/todo/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { completed } = req.body;
      
      if (isNaN(id) || id < 0) {
        return res.status(400).json({ error: 'Invalid todo ID' });
      }
      
      if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed status is required' });
      }
      
      const result = await todoService.updateTodo(id, completed);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update todo' });
    }
  });

  /**
   * API Documentation Example:
   * POST /api/todo
   * Request Body:
   * {
   *   "task": "Some API"
   * }
   * 
   * Response:
   * {
   *   "todos": [
   *     {
   *       "task": "Some API"
   *     }
   *   ]
   * }
   */

  return server;
};

module.exports = server;