/**
 * Todo Service Tests
 * Tests the business logic layer of the todo application
 * Verifies that the service correctly interacts with the repository
 */
describe('TODO Service', () => {
  /**
   * Test: Get Todos from Repository
   * Verifies that the service can retrieve todos from the repository
   */
  it('should be able to get todos from repository', async () => {
    // Mock data that the repository should return
    const expected = {
      todos: [
        {
          task: "This is a task to be done"
        }
      ]
    };
    
    // Mock repository with getTodos method
    const todoRepository = {
      getTodos: async () => Promise.resolve(expected)
    };

    // Create service instance with mock repository
    const todoService = require('../../src/service/todo')(todoRepository);
    
    // Call the service method
    const actual = await todoService.getTodos();
    
    // Assert that the service returns the expected data
    expect(actual).toEqual(expected);
  });

  /**
   * Test: Add New Todo
   * Verifies that the service can add new todos through the repository
   */
  it('should be able to add a new todo', async () => {
    // Initial state of todos
    const initialTodos = {
      todos: [
        {
          task: "Existing task"
        }
      ]
    };
    
    // Expected state after adding new todo
    const expected = {
      todos: [
        {
          task: "Existing task"
        },
        {
          task: "New task"
        }
      ]
    };

    // Mock repository with both getTodos and addTodo methods
    const todoRepository = {
      getTodos: async () => Promise.resolve(initialTodos),
      addTodo: async (task) => Promise.resolve(expected)
    };

    // Create service instance with mock repository
    const todoService = require('../../src/service/todo')(todoRepository);
    
    // Call the service method to add a new todo
    const actual = await todoService.addTodo("New task");
    
    // Assert that the service returns the updated todos
    expect(actual).toEqual(expected);
  });
});