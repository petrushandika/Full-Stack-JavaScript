// Type Convertion:
// 1. Convert string to number
let money = '10';
money = parseInt(money);
money = +money;
Number(money);

console.log(money);
console.log(typeof money);

// 2. Convert number to string
let num = 5;
num = num.toString();
num = String(num);

console.log(num);
console.log(typeof num);

// 3. Convert string to decimal
let dec = '12,345';
dec = parseFloat(dec);

console.log(dec);
console.log(typeof dec);
