// Function to reverse a given string
function reverseString(str) {
  // Create a new empty string to store the reversed version of the input string
  let newString = "";

  // Iterate over the characters in the input string in reverse order,
  // starting from the last character (i.e., str.length - 1)
  // and ending with the first character (i.e., index 0)
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the new string in reverse order
    newString += str[i];
  }

  // Return the reversed string
  return newString;
}

// Exproting the function
module.exports = reverseString;
