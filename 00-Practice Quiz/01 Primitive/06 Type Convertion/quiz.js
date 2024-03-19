// 1. Convert the variable `age` with a value of 25 into a string, then append the string " years" to it.
let age = 25;
age = age.toString();

console.log(typeof age);
console.log(`${age} years`);

// 2. Convert the variable `initialScore` with a value of "50" into a number, then add 20 to the value.
let initialScore = "50";
initialScore = parseInt(initialScore);

console.log(typeof initialScore);
console.log(initialScore + 20);

// 3. Convert the boolean value `isActive` with a value of `true` into a string, then append the string " is currently active" to it.
let isActive = true;
isActive = isActive.toString();

console.log(typeof isActive);
console.log(`${isActive} is currently active`);

// 4. Convert the number value `year` with a value of 2022 into a string, then append the string " AD" to it.
let year = 2022;
year = year.toString();

console.log(typeof year);
console.log(`${year} AD`);

// 5. Convert the variable `productPrice` with a value of 100.50 into an integer, then add 10 to the value.
let productPrice = 100.50;
productPrice = parseInt(productPrice);

console.log(typeof productPrice);
console.log(productPrice + 10);

// 6. Convert the string value `quantity` with a value of "10" into a number, then subtract 5 from the value.
let quantity = "10";
quantity = Number(quantity);

console.log(typeof quantity);
console.log(quantity + 5);

// 7. Convert the string value `isMarried` with a value of "false" into a boolean, then add the boolean `isSingle` with a value of `true`.
let isMarried = "false";
let isSingle = true;

isMarried = Boolean(isMarried);
const result = isMarried + isSingle;
console.log(result);

// 8. Convert the variable `weight` with a value of 75 into a string, then append the string " kg" to it.
let weight = 75;
weight = weight.toString();

console.log(typeof weight);
console.log(`${weight} kg`);

// 9. Convert the boolean value `isValid` with a value of `false` into a number, then add 1 to the value.
let isValid = false;
isValid = Number(isValid);

console.log(typeof isValid);
console.log(false + 1);

// 10. Convert the variable `height` with a value of 10.75 into an integer, then add 5 to the value.
let height = 10.75;
height = parseInt(height);

console.log(typeof height);
console.log(height + 5);
