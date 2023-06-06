// Import the Express library, which is used for server routing
const express = require("express");

// Import the Axios library, which is used for making HTTP requests
const axios = require("axios");

// Create an instance of an Express app
const app = express();

// Define a GET route at path "/users"
app.get("/users", async (req, res) => {
  try {
    // Use Axios to make a GET request to the external API
    const response = await axios.get("https://externalapi.com/users");

    // Send the data from the external API's response as the response of our Express server
    res.send(response.data);
  } catch (error) {
    // If an error occurs, send an HTTP 500 (Internal Server Error) status code and the error message
    res.status(500).send(error.message);
  }
});

// Export the Express app for use in other modules
module.exports = app;
