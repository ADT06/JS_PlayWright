
//exporting funtion linked to lesson 8 - importing function - outside this file
export function printAge(age){ 
    console.log(age)
}
printAge()

//And you can import the function into the different Java classes. For that, you need to 
//export this function first with the keyword export and then you call import name
// of the function and provide the relative path to the function location.
//And then you simply call this function and use it.
// Also, you can import all the functions from the JavaScript using import start as provide the name of the object, 
//how you want to use this function, and then through the dot notation you call the function inside of the file.

//create inside the the class the methods
export class CustomerDetails {
    printFirstName(name) {
        console.log(name);
    }
}
 //class gets created by the keyword and use capitals in the beginning of the word
 //if you export the class it will be visible in other files in JS 
