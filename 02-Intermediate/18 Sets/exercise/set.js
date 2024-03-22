/*
Set exercise:
1. Create a Set name (letters)
2. Add ('a', 'b', 'c') as properties
3. Add ('a', 'b', 'c') as values
4. Iterate over Set & log the values
*/
const letters = new Set();

letters.add('a' , 'a');
letters.add('b', 'b');
letters.add('c', 'c');

for (let value of letters) {
    console.log(value);
}