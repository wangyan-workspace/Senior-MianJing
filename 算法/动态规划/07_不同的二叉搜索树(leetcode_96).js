/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    // 这个循环用于选择每个节点 j 作为根节点。对于每个 j，我们将其作为根节点，然后计算左子树和右子树的数量。
    for (let j = 1; j <= i; j++) {
        // 左子树的节点数为 j - 1（因为根节点 j 左边的节点都是左子树的节点），
        // 右子树的节点数为 i - j（因为根节点 j 右边的节点都是右子树的节点）。
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};
