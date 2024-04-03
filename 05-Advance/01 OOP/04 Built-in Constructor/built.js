// Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allow you to create objects of various data types. These constructors are available globally and do not need to be explicitly defined. They provide a convenient way to create instances of primitive data types and built-in objects.

// Number Constructor:
const num = new Number(42);
console.log(typeof num); // Output: "object"
console.log(num.valueOf()); // Output: 42

const numOne = 7;
console.log(typeof numOne); // Output: "number"

// String Constructor
const str = new String("Hello");
console.log(typeof str); // Output: "object"
console.log(str.valueOf()); // Output: "Hello"

const strOne = "World";
console.log(typeof strOne); // Output: "string"

// Boolean Constructor
const bool = new Boolean(true);
console.log(typeof bool); // Output: "object"
console.log(bool.valueOf()); // Output: true

const boolOne = false;
console.log(typeof boolOne); // Output: "boolean"

// Array Constructor
const arr = new Array(1, 2, 3);
console.log(arr); // Output: [1, 2, 3]
console.log(Array.isArray(arr)); // Output: true

const arrOne = [4, 5, 6];
console.log(arrOne); // Output: [4, 5, 6]
console.log(Array.isArray(arrOne)); // Output: true

// Object Constructor
const obj = new Object();
obj.name = "John";
obj.age = 30;
console.log(obj); // Output: { name: "John", age: 30 }

const objOne = { city: "New York" };
console.log(objOne); // Output: { city: "New York" }
