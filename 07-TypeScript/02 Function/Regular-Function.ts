// Regular function
function addOne(num: number) {
    return num + 1;
}

const resultNum = addOne(3)
console.log(resultNum);

// Arrow Function
const double = (x: number, y: number) => x * y;
const resultNumber = double(2, 10)
console.log(resultNumber);