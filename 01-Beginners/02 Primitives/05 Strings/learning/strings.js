// Strings
let firstName = 'Petrus';
let secondName = 'Handika';

// 1. Concatenation
let fullName = firstName.concat(secondName);
console.log(fullName);

// 2. Append
firstName += ' is a Programmer';
console.log(firstName);

// 3. Lenght
console.log(firstName.length);

// 4. Cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// 5. Slice
console.log(firstName.slice(0, 3));

// 6. Split & Join
console.log(firstName.split(' '));
console.log(firstName.split(' ').join(' '));

// 7. Includes
console.log(firstName.includes('P'));
console.log(firstName.includes('X'));

// 8. Trim
let text = '          This is new text        ';
console.log(text);
console.log(text.trim());

// Bactic
let anyText = `The bactic can make
the multiline text`;
console.log(anyText);
let name = 'Ujang';
let quotes = 'You can do it!'
console.log(`${name} ${quotes}`);
