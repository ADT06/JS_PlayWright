//Declaring functions
//can be called in the beginning of the file


function helloOne(){
    console.log('Hello one!')
}
helloOne() //to see it Hello one displayed in terminal

//Anomymuos function, this function does not have a name, so needs to be assigned to a variable
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

//ES6 function syntax  or arrow function
var helloThree = () =>{
    console.log('Hello Three!')
}
helloThree()  

//Function with arguments, 
//The values that you use inside of the parentheses , name and lastname,  of the function.
//Called the parameters of the functions  

function printTheName(name,lastName){
console.log(name + ' '+ lastName) // code is not dependent on the hard coded data
}
printTheName('John', 'Pop')
//the values that you pass into , like John and Pop , are the functions, are the arguments of the functions 
//that are passed into the function and used inside of the function.

//function with return
function multiplyByThree (number){
    var result = number * 3
    return result // to return the result
}
var myresult = multiplyByThree(9)
console.log(myresult)
//here it is assigned to the variable

//importing function
import {printAge} from '../JS_PlayWright/helpers/printHelper.js' //importing from printerHelper.js file export function has been used there
printAge(5) //is called the function to use it

//import everything, form an other 
import * as helper from '../JS_PlayWright/helpers/printHelper.js' 
helper.printAge (10)
//you can import all the functions from the JavaScript using import start as provide the name of the object 'helper', 
//how you want to use this function, and then through the dot.notation you call the function inside of the file.