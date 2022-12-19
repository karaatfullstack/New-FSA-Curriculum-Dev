# Instructions

1. This code defines a constructor function called Car that creates a new object with properties make, model, and year. It also adds a method called getDescription to the Car prototype, which returns a string containing information about the car.

2. The ElectricCar function is then defined as a subclass of Car. It has an additional property called range that represents the range of the electric car in miles. The ElectricCar function sets the prototype of the electric car to be an object that inherits from the Car prototype using Object.create(Car.prototype), and sets the constructor property of the ElectricCar prototype to be the ElectricCar function using ElectricCar.prototype.constructor = ElectricCar.

3. The ElectricCar prototype also overrides the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.

4. Finally, an instance of ElectricCar is created with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.