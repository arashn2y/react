// create and call the function
function sayHello() {
  console.log("Hello");
}

//parameters
const greeting = name => {
  if (typeof name === "string") {
    console.log(`Hello ${name}`);
  } else {
    console.log("Please provide a name");
  }
};

const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Please provide two numbers";
  }
};

const addToEnd = (array, item) => {
  if (Array.isArray(array)) {
    return [...array, item];
  } else {
    return "Please provide an array";
  }
};

const canDrink = age => {
  if (typeof age === "number") {
    const canDrink = age >= 18 && age < 60;
    return canDrink;
  } else {
    return "Please provide a number";
  }
};

// The difference between function declaration and function expression (classic function vs arrow function)
//1. Classic functions use the function keyword and are hoisted, meaning you can call them before they are defined.
// console.log(sayHi());
// function sayHi() {
//   return "Hi!";
// }

//2. Arrow functions use => syntax, are shorter, and are often used for simple operations or callbacks.

//3. Arrow functions do not have their own this, so they inherit it from the surrounding scope — this makes them unsuitable for methods in objects.
// const person = {
//   name: "Anna",
//   greet: function () {
//     console.log("Hello, I'm " + this.name);
//   },
//   // greet: () => {
//   //   console.log("Hello, I'm " + this.name);
//   // },
// };
// person.greet();

//4. Arrow functions are not hoisted, so they must be defined before being called.
// console.log(sayHi());
// const sayHi = () => {
//   return "Hi!";
// };

//5. Arrow functions can return values implicitly when written in a one-line expression without curly braces.
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5
