// 1. Concatenation: Create a variable `firstName` with the value "John" and a variable `lastName` with the value "Doe". Combine them into one string with a space between the first and last names.
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName.concat(` ${lastName}`);
console.log(fullName);

// 2. Append: Add the string ", PhD" to an existing variable `title`, initially having the value "Lecturer".
let title = 'Lecturer';
title += ' PHD'
console.log(title);

// 3. Length: Determine the length (number of characters) of the string "JavaScript is a powerful programming language!".
let text = 'JavaScript is a powerful programming language!';
console.log(text.length);

// 4. Cases: Convert the string "This Is An Example" to lowercase.
let cases = 'This Is An Example';
console.log(cases.toLowerCase());
console.log(cases.toUpperCase());

// 5. Slice: Slice the string "Lorem ipsum dolor sit amet" from index 6 to 10.
let slices = 'Lorem ipsum dolor sit amet';
console.log(slices.slice(6, 10));

// 6. Split & Join: Split the string "apple,banana,grape" into an array, then join the array back into a string using a comma and a space as separators.
let splitsJoin = ['apple', 'banana', 'grape'];
console.log(splitsJoin.join(' '));
console.log(splitsJoin.join(' ').split(' ').join(' '));

// 7. Includes: Check if the string "Today is a sunny day" includes the word "sunny".
let inc = 'Today is a sunny day'
console.log(inc.includes('sunny'));

// 8. Trim: Remove extra spaces at the beginning and end of the string "'   Hello, World!   '".
let tri = '   Hello, World!   ';
console.log(tri.trim());

// 9. Other Manipulations: Split the string "1234567890" into three parts, each with a length of 3 characters, and join them with a hyphen ("-") in between.
let str = '1234567890';
let partOne = str.substring(0, 3);
let partTwo = str.substring(3, 6);
let partThree = str.substring(6);

let result = [partOne, partTwo, partThree].join('-');
console.log(result);

// 10. Combination of Manipulations: Create a variable `sentence` with the value "This is an example sentence." Convert the sentence to lowercase, slice it into two parts from index 8, then join them back together with the word "great!" inserted in the middle.
let sentence = 'This is an example sentence'
console.log(sentence.toLowerCase().slice(8));
