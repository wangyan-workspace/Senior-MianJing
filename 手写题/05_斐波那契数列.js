function fib(n) {
  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

function fib1(n) {
  let pre = 0;
  let cur = 1;

  for (let i = 2; i <= n; i++) {
    let temp = pre + cur;
    pre = cur;
    cur = temp;
  }

  return cur;
}
