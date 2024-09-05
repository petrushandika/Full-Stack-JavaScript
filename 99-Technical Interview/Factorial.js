function factorial(nums) {
  if (nums === 0 || nums === 1) {
    return 1;
  } else {
    return nums * factorial(nums - 1);
  }
}

const result = factorial(10);
console.log(result);
