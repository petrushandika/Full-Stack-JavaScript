function getRandomKey<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomKey, value: obj[randomKey] };
}

const stringObject = {
  a: "apple",
  b: "banana",
  c: "cherry",
};
const resultObj = getRandomKey<string>(stringObject);
console.log(resultObj);

const numberObj = { one: 1, two: 2, three: 3 };
const randomNumber = getRandomKey<number>(numberObj);
console.log(randomNumber);

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);

const stringArray = ["Apple", "Banana", "Cherry", "date"];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWords);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);

console.log(redFruits);
