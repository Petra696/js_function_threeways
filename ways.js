//square numbers
let squaredNumber = Math.pow(5, 2);
console.log("5*5 = ", squaredNumber);
// output expected 25

let variable = 5;
let squaredNumber2 = Math.pow(variable, 2);
console.log("5*5= ", squaredNumber2);
//output expected 25


//function declarations
function add(number1, number2) {
    return number1 + number2;
}
add(25, 25); //50

//function expressions
const add1 = function (number1, number2) {
    return number1 + number2;
};
add(25, 25); // 50

//arrow function
const add2 = (number1, number2) => {
    return number1 + number2;
};
add(25, 25); // 50

//squared again
let squaredNumber3 = Math.pow(25, 2);
console.log("25*25 = ", squaredNumber3);
// output expected 625

let variable1 = 25;
let squaredNumber4 = Math.pow(variable1, 2);
console.log("25*25= ", squaredNumber4);
//output expected 625


