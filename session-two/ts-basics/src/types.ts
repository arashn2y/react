// type Primitives =
// | string
// | number
// | boolean
// | symbol
// | bigint
// | undefined
// | null;

// type ComplexTypes =
// | object
// | Array

let userName = "John Doe";
// userName = 23; // Error: Type 'number' is not assignable to type 'string'

let age = 30;
// age = "thirty"; // Error: Type 'string' is not assignable to type 'number'

let isLoggedIn = true;
// isLoggedIn = "yes"; // Error: Type 'string' is not assignable to type 'boolean'

let userId = Symbol("userId");
// userId = 123; // Error: Type 'number' is not assignable to type 'symbol'

//  undefined vs null
let undefinedValue: undefined = undefined;
// undefinedValue = null; // Error: Type 'null' is not assignable to type 'undefined'

let nullValue: null = null;
// nullValue = undefined; // Error: Type 'undefined' is not assignable to type 'null'

// try to remove null and undefined as types

let userPhoneNumbers = ["123-456-7890", "987-654-3210"];
// userPhoneNumbers.push(1234567890); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

let userAddress = {
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001"
};

// userAddress.street = 456; // Error: Type 'number' is not assignable to type 'string'

// Why not use any?
let anyValue: any = "Hello, World!";
anyValue.toUpperCase(); // "HELLO, WORLD!"
anyValue = 42;
anyValue.toUpperCase(); // Error: toUpperCase is not a function
anyValue = true;
anyValue = ["Hello", "World"];
anyValue = { name: "John Doe" };

// Why use unknown instead of any?
let unknownValue: unknown = "Hello, World!";
// unknownValue.toUpperCase(); // Error: Object is of type 'unknown'
unknownValue = 42; // No error
unknownValue = true; // No error
unknownValue = ["Hello", "World"]; // No error
unknownValue = { name: "John Doe" }; // No error

// union types
let ID: string | number = "12345";
// ID = 12345; // No error
// ID = true; // Error: Type 'boolean' is not assignable to type 'string | number'
