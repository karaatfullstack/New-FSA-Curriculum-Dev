/* Importing the fetch API from the node-fetch package. */
import fetch from 'node-fetch'; // not required for node 18+

/**
 * The getData function returns a promise that resolves to an array of todo objects.
 * @returns The data is being returned.
 */
async function getData() {
  try {
    /* Fetching the data from the API. */
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    /* Parsing the response as JSON. */
    const data = await response.json();

    /* Returning the data. */
    return data;
  } catch (error) {
    /* Logging the error to the console. */
    console.error(error);
  }
}

/* Calling the getData function and then logging the data to the console. */
getData().then(data => console.log(data));