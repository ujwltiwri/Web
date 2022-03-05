// Empty Array

let arr_empty = [];
console.log(arr_empty);

let array = [
  1,
  2,
  3,
  4,
  5,
  "Ujjwal",
  "Hello World",
  true,
  "Last Item In Array",
];
console.log(array);

// Array Methods

// 1-> Push
console.log("Array Before Push", array);
array.push("New Item in Push");
console.log("Array After Adding Push", array);

// 2-> Pop
console.log("Array Before Pop", array);
array.pop("Item Removed Using Pop");
console.log("Array After Adding Pop", array);

// 3-> Shift
console.log("Array Before Shift", array);
array.shift("First Item Removed Using Shift");
console.log("Array After Adding Shift", array);

// 4-> Unshift
console.log("Array Before Unshift", array);
array.unshift("First Item Added Using Unshift");
console.log("Array After Adding Unshift", array);

// 5-> Length

let length = array.length;
console.log(length);
