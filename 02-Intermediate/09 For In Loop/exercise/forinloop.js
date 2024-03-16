/*
For in loop exercise:
1. Iterate over object & log the property and the value of that object using for in loop
*/

const object = {a: 1, b: 2, c: 3};

for (objectValue in object) {
    console.log(`${objectValue}: ${object[objectValue]}`);
}