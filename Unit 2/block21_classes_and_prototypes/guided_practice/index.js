// Define a base class for homes
class Home {
    constructor(rooms, bathrooms, squareFeet) {
      this.rooms = rooms;
      this.bathrooms = bathrooms;
      this.squareFeet = squareFeet;
    }
  
    getInfo() {
      return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet.`;
    }
  }
  
  // Define a subclass for single family homes
  class SingleFamilyHome extends Home {
    constructor(rooms, bathrooms, squareFeet, yardSize) {
      super(rooms, bathrooms, squareFeet);
      this.yardSize = yardSize;
    }
  
    getInfo() {
      return `${super.getInfo()} It has a ${this.yardSize} square foot yard.`;
    }
  }
  
  // Define a subclass for apartments
  class Apartment extends Home {
    constructor(rooms, bathrooms, squareFeet, floor) {
      super(rooms, bathrooms, squareFeet);
      this.floor = floor;
    }
  
    getInfo() {
      return `${super.getInfo()} It is on floor ${this.floor}.`;
    }
  }
  
  // Create some instances of the classes
  const home1 = new Home(3, 2, 1200);
  console.log(home1.getInfo()); // Output: "This home has 3 rooms, 2 bathrooms, and is 1200 square feet."
  
  const home2 = new SingleFamilyHome(4, 3, 2000, 5000);
  console.log(home2.getInfo()); // Output: "This home has 4 rooms, 3 bathrooms, and is 2000 square feet. It has a 5000 square foot yard."
  
  const home3 = new Apartment(2, 1, 800, 3);
  console.log(home3.getInfo()); // Output: "This home has 2 rooms, 1 bathroom, and is 800 square feet. It is on floor 3."
  
  // Check if the instances are instances of their respective classes
  console.log(home1 instanceof Home); // Output: true
  console.log(home2 instanceof SingleFamilyHome); // Output: true
  console.log(home3 instanceof Apartment); // Output: true