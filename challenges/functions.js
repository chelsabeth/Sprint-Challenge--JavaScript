// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb){
  return cb(a, b);
}
const substract = (a, b) => {
  return a - b;
};

console.log(consume(2, 5, substract));
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(a, b, cb){
  return cb(a, b);
}
const add = (a, b) => {
  return a + b;
};



function consume(a, b, cb){
  return cb(a, b);
}
const multiply = (a, b) => {
  return a * b;
}


function consume(a, b, cb){
  return cb(a, b);
}
const greeting = (a, b) => {
  return a + b;
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// nestedFunction can access the variable internal because it is within it's scope. The scope of that object is within the curly braces and can read whatever is nested inside of its curly braces

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
