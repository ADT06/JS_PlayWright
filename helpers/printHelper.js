export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
 
export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

//code explained:
//The add function takes two parameters, a and b, and returns their sum.
//The subtract function takes two parameters, a and b, and returns the result of subtracting b from a.
//Both functions are exported, making them available for import in other files.
//The Person class is defined with a constructor that initializes the name and age properties.
//The greet method logs a greeting message to the console, using the instance’s name and age.
//This class is exported as the default export, meaning it can be imported without curly braces