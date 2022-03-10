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

// console.log(objec);

//Nested Object and Printing Almost Every Type of Values in JS
let CapAmerica = {
  Name: "Steve",
  Age: 99,
  Friends: ["Natasha", "Thor", "Iron Man", "Hulk"], // Using Array in Object
  iscapAmerica: false, // Boolean
  address: {
    // Obj Within Obj
    State: "Washington DC",
    City: "Queens",
  },
  hello: function () {
    console.log("New Function in Object");
  },
};

// console.log(CapAmerica);

// Accesing Only Required keys and values from an object
console.log("Accessed Name: " + CapAmerica.Name);
console.log("Accessed Array: " + CapAmerica.Friends);
console.log("Accessed Object With Object: " + CapAmerica.address.City);
// Accessed Function
CapAmerica.hello();

// Add a new Key to Object
console.log("Object Before Update: ", CapAmerica);
//to add a new key just write obj name with . operator and key name after that
CapAmerica.Movies = "Ultron, Iron Man, The Hulk, Thor, Endgame";
console.log("Object After Update: ", CapAmerica);
// ######################################################################

// Delete a Key From an Object
console.log("Object Before Delete: ", CapAmerica);
delete CapAmerica.Movies;
console.log("Object After Delete: ", CapAmerica);
// #######################################################################

//Update Key in Object
CapAmerica.iscapAmerica = true;
CapAmerica.Name = "Peter Parker";
CapAmerica.address.State = "Jharkhand";
console.log(CapAmerica);
// #######################################################################

//Methods to access a key
// 1. dot (.) Operator. Here Whatever is written after dot is considered as String
console.log(CapAmerica.Name);

// 2. In this method we are using [] (bracket notation). Here have to convert whatever we write inside bracket notation to string to access a key, cuz by default if we
// don't make it a string then it will consider whatever written b/w [ujjwal] this
// as a variable inside the obj and start searching as a var in that object
console.log(CapAmerica["Name"]);
