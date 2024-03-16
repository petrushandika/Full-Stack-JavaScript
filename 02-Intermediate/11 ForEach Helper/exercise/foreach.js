/*
forEach Helper Exercise:
1. Create an array of numbers.
2. Create a variable to hold the sum.
3. Create the adder function with takes the parameter of number & add that with sum variable.
4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach.
5. print the sum variable.
*/

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
function adder(number) {
    sum += number;
}
numbers.forEach(adder);
console.log(sum);