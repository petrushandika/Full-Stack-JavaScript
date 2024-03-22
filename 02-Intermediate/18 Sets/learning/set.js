// Set
const mySet = new Set();

mySet.add('apple');
mySet.add('pineapple');
mySet.add('Avocado');
mySet.add('Orange');

for (let item of mySet) {
    console.log(item);
}

console.log(mySet.has('apple'));
console.log(mySet.delete('pineapple'));
console.log(mySet);