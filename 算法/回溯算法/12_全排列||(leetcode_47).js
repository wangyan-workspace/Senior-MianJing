/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [];
  let path = [];
  const len = nums.length;

  nums.sort((a, b) => a - b);

  const backtracking = (used) => {
    if (path.length === len) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        backtracking(used);
        path.pop();
        used[i] = false;
      }
    }
  };

  backtracking([]);
  return result;
};
