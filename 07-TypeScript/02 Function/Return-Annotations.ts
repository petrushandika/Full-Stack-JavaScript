// Regular function
function doubleOne(x: number): number {
  return x * x;
}

const resultNumbers = doubleOne(2);
console.log(resultNumbers);

// Arrow function
const doubleTwo = (x: number): number => x * x;

console.log(doubleTwo(2));
