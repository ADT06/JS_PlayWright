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

//how you want to use this function, and then through the dot notation you call the function inside of the file.
//create inside the the class the methods
// Exporting functions
//class gets created by the keyword and use capitals in the beginning of the word
// if you export the class it will be visible in other files in JS 
// Exporting a class as default