//conditional statements

//if(condition){
    //if this TRUE, the code inside this block will execute here
//} else {
//if this is FALSE, the code inside this block will execute here and first if statement will be skipped
//}

//if hour between 6 and 12 we would like to print "Good Morning"
//if hour between 12 and 118 we would like to print "Good Afternoon"
// otherwise we would like to print "Good evening"

var hour = 10;

//if (hour >= 6 && hour < 12) {
//    console.log('Good morning');
//} else if (hour >= 12 && hour < 18) {
//   console.log('Good Afternoon');
//} else {
 //   console.log('Good Evening');
//}
    
var ageIsMoreThanEighteen = true;
var ukCitizen = true;

if (ageIsMoreThanEighteen && ukCitizen) {
    console.log('This person is eligible for DL');
} else {
    console.log('This person is NOT eligible for DL');
}
