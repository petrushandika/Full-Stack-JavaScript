/*
Reduce helper exercise:
1. Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

2. Write the calculateProduct function using the reduce() method to achieve this task.

3. Something like this
   const numbers = [2, 3, 4, 5];

   const product = calculateProduct(numbers);
   console.log(product);
*/
function calculateProduct(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const numbers = [2, 3, 4, 5];
const product = calculateProduct(numbers);
console.log(product);