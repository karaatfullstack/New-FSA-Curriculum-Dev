function HourglassTriangle(num) {
    if (num <= 0) {
      return;
    }
    
    // Print spaces before the stars
    let spaces = '';
    for (let i = 0; i < (5 - num); i++) {
      spaces += ' ';
    }
    
    // Print the stars
    let stars = '';
    for (let i = 0; i < (2 * num - 1); i++) {
      stars += '*';
    }
    
    // Print the current line
    console.log(spaces + stars);
    
    // Recursively call the function with num-1
    HourglassTriangle(num - 1);
    
    // Print the same line again
    console.log(spaces + stars);
  }
  
  // Test the function with an argument of 4
  HourglassTriangle(4);