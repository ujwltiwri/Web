//Function Without Return Type
function name() {
  console.log("Function Without Return Type");
}

name(); // called name function
// #######################################

//Function With Return Type
function subtraction(num1, num2) {
  return num1 - num2;
}

console.log(subtraction(40, 50)); //subtraction function called

//Another Eg Function With Return Type

function additions(add1, add2) {
  return add1 + add2;
}

let sums = additions(10, 23);

console.log(sums);

// Declaratin of a function in a variable is also possible JS
// That's Why
// In JS functions are called First Class Citizens

let a = function addition(num1, num2) {
  return num1 + num2;
};

console.log(a(10, 60));

// Immediately Invoked Function Expression -> IIFE
// Immediately Invoked Means Calling it Right Away
// It's Used Cuz if we know that we want to call it once then can call it at same place
// Without Paramter

(function () {
  console.log("Hello World");
})(/*functin calling right here inside this bracket*/);

(function (num1, num2) {
  console.log(num1 / num2);
})(150, 15 /* Called Here Instead of Calling Somewhere else */);
