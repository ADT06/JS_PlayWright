import { add, subtract } from './helpers/printHelper.js';
import Person from './helpers/printHelper.js';


console.log(add(2, 3));                     
console.log(subtract(5, 2));               


const tanya = new Person('Tanya', 25);        
tanya.greet();       



//Output: 5 // Using the imported functions
// Output: 3
// type import and name and vscode will give a hint which class is available to choose and by clicking enter, vs code will create the import
// Using the imported class
// Output: Hello, my name is John and I am 25 years old.

// Importing functions and class