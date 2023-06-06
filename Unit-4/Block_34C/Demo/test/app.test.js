// Import the Axios and Supertest libraries, which are used for making HTTP requests and testing them
const axios = require("axios");
const request = require("supertest");

// Import the Express app
const app = require("./app");

// Mock the axios module
jest.mock("axios");

// Describe a set of tests for the GET /users route
describe("GET /users", () => {
  // After each test in this block, reset the mock implementation of axios.get
  afterEach(() => {
    // Clearing all instances of axios mocks
    axios.get.mockReset();
  });

  // Test that the route correctly fetches users
  it("should fetch users", async () => {
    // Mock data representing users
    const users = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ];

    // Mock the axios.get implementation to return a promise that resolves to the mocked users data
    axios.get.mockImplementation(() => Promise.resolve({ data: users }));

    // Use supertest to send a GET request to /users
    const response = await request(app).get("/users");

    // Assert that the response status is 200 (OK), and the response body equals the mocked users data
    // Also check that axios.get has been called exactly once with the correct argument
    expect(response.status).toBe(200);
    expect(response.body).toEqual(users);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("https://externalapi.com/users");
  });

  // Test that the route correctly handles an error
  it("should handle error", async () => {
    const errorMessage = "Error occurred";

    // Mock the axios.get implementation to return a promise that rejects with an error
    axios.get.mockImplementation(() => Promise.reject(new Error(errorMessage)));

    // Use supertest to send a GET request to /users
    const response = await request(app).get("/users");

    // Assert that the response status is 500 (Internal Server Error), and the response text equals the error message
    // Also check that axios.get has been called exactly once with the correct argument
    expect(response.status).toBe(500);
    expect(response.text).toEqual(errorMessage);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("https://externalapi.com/users");
  });
});
