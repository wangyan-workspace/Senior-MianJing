/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  let path = [];
  candidates.sort((a, b) => a - b);

  const backtracking = (startIndex, sum) => {
    if (sum === target) {
      result.push(Array.from(path));
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      let n = candidates[i];

      if (n > target - sum) break;

      path.push(n); // 注意⭐️：n充分利用一下，n即为使用的数字
      sum += n;
      backtracking(i, sum);
      path.pop();
      sum -= n;
    }
  };

  backtracking(0, 0);
  return result;
};
