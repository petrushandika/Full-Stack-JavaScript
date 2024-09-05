function isPrime(nums) {
  if (nums <= 1) return false;

  for (let i = 2; i < Math.sqrt(nums); i++) {
    if (nums % i === 0) return false;
  }

  return true;
}

const result = isPrime(2);
console.log(result);
