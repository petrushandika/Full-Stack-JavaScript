function missingTermInAP(arr) {
  const n = arr.length;

  const diff = (arr[n - 1] - arr[0]) / n;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      return arr[i] + diff;
    }
  }

  return null;
}

const arr = [1, 3, 5, 9, 11];
const result = missingTermInAP(arr);
console.log(result);
