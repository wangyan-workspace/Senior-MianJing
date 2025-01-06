/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
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

      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (n > target - sum) {
        break;
      }

      path.push(n);
      sum += n;
      backtracking(i + 1, sum);
      path.pop();
      sum -= n;
    }
  };

  backtracking(0, 0);
  return result;
};
