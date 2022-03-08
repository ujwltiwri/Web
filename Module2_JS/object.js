// An empty object
let emptyobj = {};
console.log(emptyobj);

// Object -> (Object is Key:Value Pair) With Values
// Object is Declared With Curly Braces
// Key (should be unique) is string by default in object
let objec = {
  Name: "Ujjwal Tiwari",
  Age: 23,
  Phone_No: 8894668683,
  // If i don't Use Double Quotes in Key then it will still be treated as string
  lastName: "Tiwari",
  "Phone Number": 8219703902,
};

console.log(objec);

//Nested Object and Printing Almost Every Type of Values in JS
let CapAmerica = {
  Name: "Steve",
  Age: 99,
  Friends: ["Natasha", "Thor", "Iron Man", "Hulk"], // Using Array in Object
  address: {
    // Obj Within Obj
    State: "Washington DC",
    City: "Queens",
  },
  hello: function () {
    console.log("Hello World");
  },
};

console.log(CapAmerica);
