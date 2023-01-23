# Instructions

1. We define an object called animal with a single method called eat. This method simply logs the string "nom nom nom" to the console.

2. Then, we define another object called dog with a single method called bark. This method logs the string "Woof!" to the console.

3. Next, the code sets the prototype of the dog object to be the animal object using the __proto__ property. This means that dog will inherit the properties and methods of animal.

4. Finally, the code calls the eat method on the dog object. Since the dog object now has access to the eat method through its prototype chain, the "nom nom nom" string will be logged to the console.