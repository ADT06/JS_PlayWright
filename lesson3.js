//objects and arrays :objects is an entity that can hold multiple values at the same time.

var customer = {
    firstName: 'Minnie',
    lastName: 'Mouse',
    cars: ["Volvo", "Tesla", "Volkswagen"]
}
//dot notation
customer.firstName = 'Goofy'
//bracket notation
customer['firstName'] = 'Goopy',

//now using interpolation
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["Volvo", "Tesla", "Volkswagen"] //listed in order, index starting wit 0 (volvo), 1 Tesla, 2 Volkswagen
car [1] = "BMW"
console.log (car[1]) //is will show the value that is listed in order
console.log (car [2])