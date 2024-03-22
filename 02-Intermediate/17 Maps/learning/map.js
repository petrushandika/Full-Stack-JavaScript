// Map
const map = new Map();

const keyOne = 'String';
const keyTwo = {};
const keyThree = function() {};

map.set(keyOne, 'Value of Key One');
map.set(keyTwo, 'Value of Key Two');
map.set(keyThree, 'Value of Key Three');

// console.log(delete(keyTwo));
// console.log(map);

for (let [key, value] of map) {
    console.log(`${key} : ${value}`);
}

for (let key of map) {
    console.log(`${key}`);
}

for (let value of map) {
    console.log(`${value}`);
}