import { add, subtract } from './helpers/printHelper.js';
import Person from './helpers/printHelper.js';


console.log(add(2, 3));                     
console.log(subtract(5, 2));               


const tanya = new Person('Tanya', 25);        
tanya.greet();       


// Importing class and methodes
//The first line imports two named functions, add and subtract, from the printHelper.js file located in the helpers directory.
//The second line imports a default export, Person, from the same file.
//console.log(add(2, 3)); calls the add function with arguments 2 and 3, and logs the result (5) to the console.
//console.log(subtract(5, 2)); calls the subtract function with arguments 5 and 2, and logs the result (3) to the console.
//const tanya = new Person('Tanya', 25); creates a new instance of the Person class with the name 'Tanya' and age 25.
//tanya.greet(); calls the greet method on the tanya instance, which presumably logs a greeting message to the console.

