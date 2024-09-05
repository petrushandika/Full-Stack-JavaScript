// Sum of two numbers
function sumOfTwoNumbers(a, b) {
  return a + b;
}

console.log(sumOfTwoNumbers(5, 5));

// Two sum
const nums = [2, 7, 11, 13, 2];
const target = 9;

const result = twoSum(nums, target);
console.log(result);
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Calculate target by index
const x = [2, 7, 11, 13, 2];
const y = 24;

const output = calculateTarget(x, y);
console.log(output);
function calculateTarget(x, y) {
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      if (x[i] + x[j] === y) {
        return x[i] + x[j];
      }
    }
  }
}
