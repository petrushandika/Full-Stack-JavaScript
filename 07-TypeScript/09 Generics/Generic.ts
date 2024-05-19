function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}

function printBoolean(
  item: boolean,
  defaultValue: boolean
): [boolean, boolean] {
  return [item, defaultValue];
}

const num = printNumber(2, 10);
const str = printString("Hello", "World");
const bool = printBoolean(true, false);

console.log(num);
console.log(str);
console.log(bool);

// Refactoring
function UniqueDataTypes<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

const numResult = UniqueDataTypes<number>(10, 20);
const strResult = UniqueDataTypes<string>("hello", "world");
const boolResult = UniqueDataTypes<boolean>(true, false);

console.log(numResult);
console.log(strResult);
console.log(boolResult);

interface Dog {
  name: string;
  breed: string;
}

const dogOne = UniqueDataTypes<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);

console.log(dogOne);
