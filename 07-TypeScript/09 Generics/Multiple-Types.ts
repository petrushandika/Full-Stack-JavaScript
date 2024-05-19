function reversePair<T, U>(valueOne: T, valueTwo: U): [U, T] {
  return [valueTwo, valueOne];
}

const reversedPair = reversePair("Hello", 22);
console.log(reversedPair);
