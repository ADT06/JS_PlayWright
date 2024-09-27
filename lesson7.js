//Loops, for example want to repeat 5x happy days

//for(statement1; statement2; statement3) {
  
//}

//this is called for loop or (for i loop)
//here we are declaring our initial statement with let
// i=0 is the start of the loop, 
//1<5 defines how long the loop will run and when to stop it until less then 5
// i=1+1 or i++ means last bit is to increase i by 1 everything the loop increases

//for(let i=0; i<5; i++){
//   console.log('coding!'+ i) 
//}

//for of loop
//var cars = ["Volvo", "Tesla", "Volkswagen"];
//for(let c of cars) //instead of number we create a iterator, var name car because then you dont miss out
//if(c == "Tesla"){
   // break;
//}
//console.log(cars)

//ES6 syntax for each
var cars = ["Volvo", "Tesla", "Volkswagen"];
cars.forEach(cars => {
    console.log(cars)
})