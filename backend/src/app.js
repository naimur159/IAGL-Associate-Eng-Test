const server = require('./server');

// Configure server port (default to 9091 if not specified in environment)
const PORT = process.env.PORT || 9091;

// Create and configure the Express server
const app = server();

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server started. Port ${PORT}`);
});