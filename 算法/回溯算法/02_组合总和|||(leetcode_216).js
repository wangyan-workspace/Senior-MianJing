/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let path = [];

  const backtracking = (_k, targetSum, sum, startIndex) => {
    if (sum > targetSum) return;

    if (path.length === _k) {
      if (sum === targetSum) {
        result.push(path.slice());
        return;
      }
    }

    for (let i = startIndex; i <= 9 - (_k - path.length) + 1; i++) {
      path.push(i);
      sum += i;
      backtracking(_k, targetSum, sum, i + 1);
      path.pop();
      sum -= i;
    }
  };

  backtracking(k, n, 0, 1);
  return result;
};
