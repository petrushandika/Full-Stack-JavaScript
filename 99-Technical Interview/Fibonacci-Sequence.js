function fibonacciSequence(nums) {
  if (nums <= 0) return [];

  if (nums === 1) return [0];

  let sequence = [0, 1];

  while (sequence.length < nums) {
    let nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];

    sequence.push(nextNum);
  }

  return sequence;
}

const result = fibonacciSequence(7);
console.log(result);
