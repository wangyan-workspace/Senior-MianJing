/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    // 注意⭐️：从索引3位置开始遍历
    for (let j = 1; j <= i / 2; j++) {
      // dp[i] 参与比较的原因是，我们希望在所有可能的拆分中找到最大值
      // 在初始化时，dp[i] 被设置为 0。随着计算的进行，dp[i] 会被更新为更大的值。
      // 在某些情况下，可能会有一种拆分方式，使得 dp[i] 的值比之前的值更大。因此，保留 dp[i] 的原始值是有意义的。
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }

  return dp[n];
};
