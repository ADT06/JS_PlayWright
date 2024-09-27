//concatenation and interpolation

var price = 20000
var itemName = "Car"
var messageToPrint1 = "The price for Car is £20k"
console.log(messageToPrint1)

//concatenation is to break our string into a smaller strings and combine them together.
var price2 = 30000
var itemName2 = "Golden Bracelet"
var messageToPrint2 = "The price for "+itemName2+" is £30k"
console.log(messageToPrint2);

var Price3 = 60000
var itemName3 = "to build a new Garage"
var messageToPrint3 = "The price "+itemName3+" is "+Price3+" dollars"
console.log(messageToPrint3)

//interpolation is with backspace ``quotations
var price4 = 260000
var itemName4 = "to buy a house"
var messageToPrint4 = "The price "+itemName4+" is "+price4+" dollars"
var messageToPrint5 = `The price for your new house is ${itemName4} is ${price4} pounds`
console.log(messageToPrint4)
console.log(messageToPrint5)