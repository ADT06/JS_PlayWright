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

//Function with arguments, The values that you use inside of the parentheses , name and lastname,  of the function.
//Call the parameters of the function and 

function printTheName(name,lastName){
console.log(name + ' '+ lastName) // code is not dependent on the hard coded data
}
printTheName('John', 'Pop')
//the values that you pass into , like John and Pop , are the functions are the arguments of the functions 
//that are passed into the function and used inside of the function.

//function with return
function multiplyByThree (number){
    var result = number * 3
    return result // to return the result
}
var myresult = multiplyByThree(9)
console.log(myresult)

//importing function
import {printAge} from '../JS_PlayWright/helpers/printHelper.js' //importing from printerHelper.js file
printAge(5) //is called from this file lesson 8

//import everything, form an other 
import * as helper from '../JS_PlayWright/helpers/printHelper.js'
helper.printAge (10)