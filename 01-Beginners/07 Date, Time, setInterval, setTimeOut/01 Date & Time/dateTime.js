const currentDate = new Date(2024, 2, 24, 12, 30, 0, 0);
console.log(`${currentDate}\n`);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const miliseconds = date.getMilliseconds();

console.log(date);
console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hour: ${hour}`);
console.log(`Minute: ${minutes}`);
console.log(`Second: ${seconds}`);
console.log(`MiliSecond: ${miliseconds}\n`);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
console.log(date);
date.setDate(date.getDate() - 1);
console.log(date);