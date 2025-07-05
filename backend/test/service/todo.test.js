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
          task: "This is a task to be done",
          completed: false
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
          task: "Existing task",
          completed: false
        }
      ]
    };
    
    // Expected state after adding new todo
    const expected = {
      todos: [
        {
          task: "Existing task",
          completed: false
        },
        {
          task: "New task",
          completed: false
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

  /**
   * Test: Delete Todo
   * Verifies that the service can delete todos through the repository
   */
  it('should be able to delete a todo', async () => {
    // Initial state with multiple todos
    const initialTodos = {
      todos: [
        {
          task: "First task",
          completed: false
        },
        {
          task: "Second task",
          completed: true
        },
        {
          task: "Third task",
          completed: false
        }
      ]
    };
    
    // Expected state after deleting the second todo (index 1)
    const expected = {
      todos: [
        {
          task: "First task",
          completed: false
        },
        {
          task: "Third task",
          completed: false
        }
      ]
    };

    // Mock repository with deleteTodo method
    const todoRepository = {
      deleteTodo: async (id) => Promise.resolve(expected)
    };

    // Create service instance with mock repository
    const todoService = require('../../src/service/todo')(todoRepository);
    
    // Call the service method to delete a todo
    const actual = await todoService.deleteTodo(1);
    
    // Assert that the service returns the updated todos
    expect(actual).toEqual(expected);
  });

  /**
   * Test: Update Todo
   * Verifies that the service can update todo completion status
   */
  it('should be able to update a todo completion status', async () => {
    // Initial state of todos
    const initialTodos = {
      todos: [
        {
          task: "First task",
          completed: false
        },
        {
          task: "Second task",
          completed: false
        }
      ]
    };
    
    // Expected state after marking second todo as completed
    const expected = {
      todos: [
        {
          task: "First task",
          completed: false
        },
        {
          task: "Second task",
          completed: true
        }
      ]
    };

    // Mock repository with updateTodo method
    const todoRepository = {
      updateTodo: async (id, completed) => Promise.resolve(expected)
    };

    // Create service instance with mock repository
    const todoService = require('../../src/service/todo')(todoRepository);
    
    // Call the service method to update a todo
    const actual = await todoService.updateTodo(1, true);
    
    // Assert that the service returns the updated todos
    expect(actual).toEqual(expected);
  });
});