# Instructions

1. This code defines three classes: Home, SingleFamilyHome, and Apartment. The Home class is the base class and has three properties: rooms, bathrooms, and squareFeet. It also has a method, getInfo, which returns a string containing information about the home.

2. The SingleFamilyHome class is a subclass of Home and adds a fourth property, yardSize. It also overrides the getInfo method from the base class by calling the base class's getInfo method with super.getInfo() and appending additional information about the yard size.

3. The Apartment class is also a subclass of Home and adds a fourth property, floor. It also overrides the getInfo method in a similar way to the SingleFamilyHome class, by calling the base class's getInfo method and appending additional information about the floor.

4. Three instances of these classes are then created and their getInfo methods are called. 

5. Finally, the instanceof operator is used to check whether the instances are instances of their respective classes.