// Function to reverse a given string
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
   console.log(newString) 
   return newString;    
}

// Exproting the function  
module.exports = reverseString("Prachi");
  