/*
Map helper exercise:
1. Create array with random numbers.
2. Map over each item in that array, muliply each item by 10.
*/
const numbers = [1, 2, 3, 4, 5];
const number = numbers.map((num) => num * 10);
console.log(number);

const num = [10, 20, 30, 40, 50];
myFunction = (num) => {
    return num * 10;
}
const result = num.map(myFunction);
console.log(result);