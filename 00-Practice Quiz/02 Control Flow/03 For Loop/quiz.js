// 1. Calculate and print the sum of all Fibonacci numbers from 1 to 100.
function fibonacci(range) {
    let number = [1, 1];
    let sum = 2;

    for (let i = 2; number[i - 1] + number[i - 2] <= range; i++) {
        number[i] = number[i - 1] + number[i - 2];
        sum += number[i];
    }
    return sum;
}

let result = fibonacci(100);
console.log(result);

// 2. Create an inverted pyramid pattern using numbers with a height of 5 rows, starting from number 5 and decreasing by 1 on each row.
let height = 5;

for (let i = height; i >= 1; i--) {
    let row = '';

    for (let j = height; j > i; j--) {
        row += '  ';
    }

    for (let k = i; k >= 1; k--) {
        row += k + ' ';
    }

    console.log(row);
}

// 3. Calculate and print the sum of all prime numbers from 1 to 1000.
function prime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let sum = 0;

for (let i = 2; i <= 1000; i++) {
    if (prime(i)) {
        sum += i;
    }
}

console.log(`Sum of prime number from 1 to 1000 is ${sum}`);

// 4. Create a right-angled triangle pattern using numbers with a height of 6 rows, where each row will display numbers forming a pattern like the following:
//    1
//    22
//    333
//    4444
//    55555
//    666666
function numberTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += i.toString();
        }
        console.log(row);
    }
}

numberTriangle(6);

// 5. Calculate and print the sum of the first odd numbers that have 5 digits.
function oddNumber(count) {
    let total = 0;
    let number = 10001;
    let numberFound = 0;

    while (numberFound < count) {
        if (number % 2 !== 0) {
            total += number;
            numberFound++;
        }
        number += 2;
    }
    return total;
}
const count = 5;
const total = oddNumber(count);
console.log(`Sum of the first: ${count} odd numbers with 5 digits: ${total}`);

// 6. Create an inverted right-angled triangle pattern using alphabet letters with a height of 7 rows, where each row will display letters forming a pattern like the following:
//    ABCDEFG
//    ABCDEF
//    ABCDE
//    ABCD
//    ABC
//    AB
//    A
function triangleAlphabet(height) {
    for (let i = height; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(64 + j);
        }
        console.log(row);
    }
}

triangleAlphabet(7);

// 7. Calculate and print the product of the first odd numbers that have 4 digits.
function firstOddNumber(digit) {
    let sumOddNumber = 0;
    let numbers = 1001;
    let numberFounds = 0;

    while (numberFounds < digit) {
        if (numbers % 2 !== 0) {
            sumOddNumber += numbers;
            numberFounds++;
        }
        numbers += 2;
    }
    return sumOddNumber;
}
const digit = 4;
const sumOddNumber = firstOddNumber(digit);
console.log(sumOddNumber);

// 8. Create an inverted right-angled triangle pattern using numbers with a height of 6 rows, where each row will display numbers forming a pattern like the following:
//    6
//    55
//    444
//    3333
//    22222
//    111111
function pyramidNumbers(height) {
    for (let i = height; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= height - i + 1; j++) {
            row += i.toString() + ' ';
        }
        console.log(row);
    }
}

pyramidNumbers(6);

// 9. Calculate and print the sum of all even square numbers from 1 to 100.
function squareNumber() {
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            let square = i * i;
            if (square % 2 === 0) {
                sum += square;
            }
        }
    }
    return sum;
}
const resultSquareNumber = squareNumber();
console.log(`Sum of all even square numbers from 1 to 100: ${resultSquareNumber}`);

// 10. Create a triangle pattern using Fibonacci numbers with a height of 8 rows, where each row will display numbers forming a pattern like the following:
//     1
//     1 1
//     2 3 5
//     8 13 21 34
//     55 89 144 233 377
//     610 987 1597 2584 4181 6765
//     10946 17711 28657 46368 75025 121393 196418
//     317811 514229 832040 1346269 2178309 3524578 5702887 9227465
function fibonacciTriangle(height) {
    let a = 0, b = 1;
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            let fib = a + b;
            row += fib + ' ';
            a = b;
            b = fib;
        }
        console.log(row);
    }
}

fibonacciTriangle(8);