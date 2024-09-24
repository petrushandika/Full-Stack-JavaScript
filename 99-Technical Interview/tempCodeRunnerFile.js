function brickWallPatterns(length) {
  if (length <= 0) return 0;

  const dp = new Array(length + 1).fill(0);

  dp[1] = 1; // Basis kasus untuk panjang 1
  if (length >= 2) dp[2] = 2; // Basis kasus untuk panjang 2

  for (let i = 3; i <= length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[length];
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
rl.on("line", (line) => {
  const num = parseInt(line, 10);
  if (num === 0) {
    rl.close();
    return;
  }
  inputs.push(num);
});

rl.on("close", () => {
  inputs.forEach((length) => {
    console.log(brickWallPatterns(length));
  });
});
