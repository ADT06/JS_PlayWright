var customerFirstName: string ="Laila"
var customerLastName:string ="Bash"
var customerAge:number  = 32

type Customer ={
    firstName:string, lastName:string, active: boolean}

var firstCustomer:  Customer ={
    firstName:"Mary",
    lastName:"John",
    active: true
}

//typescript vs javascript
// to create a file for typescript with namefile.ts
//like JavaScript, the same syntax. strict data-typing
//But if we hover over, for example, over the variable customer first name, we can see that it's defined as customer first name, 
//colon string. So when you create a new variable and assign a value of a certain type, this variable immediately reserve as string
//customerFirstName = 100 will throw an error

//code explained:
//customerFirstName, customerLastName, and customerAge are variables.
//customerFirstName and customerLastName are of type string and hold the values "Laila" and "Bash"
//customerAge is of type number and holds the value 32.
//Then it defines a custom type Customer.
//A Customer object must have three properties: firstName (a string), lastName (a string), and active (a boolean).
// then firstCustomer is a variable of type Customer.
//It is initialized with an object that has firstName set to "Mary", lastName set to "John", and active set to true.