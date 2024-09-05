function findLargestElement(nestedArray) {
  let largest = nestedArray[0][0];

  for (let arr of nestedArray) {
    for (let num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
}

const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = findLargestElement(nestedArray);
console.log(result);
