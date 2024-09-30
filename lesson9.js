//Class and Methods

//type import and name and vscode will give a hint which class is available to choose and by clicking enter, vs code will create the import

// Importing functions and class
import { add, subtract } from './';
import Person from './person.js';

// Using the imported functions
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3

// Using the imported class
const john = new Person('John', 25);
john.greet(); // Output: Hello, my name is John and I am 25 years old.

