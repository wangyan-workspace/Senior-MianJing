/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let path = [];
  const len = nums.length;

  const backtracking = (used) => {
    if (path.length === len) {
      result.push([...path]);
      return;
    }

    // 用used记录数字是否取过
    for (let i = 0; i < len; i++) {
      if (used[nums[i]]) continue;

      used[nums[i]] = true;
      path.push(nums[i]);
      backtracking(used);
      path.pop();
      used[nums[i]] = false;
    }
  };

  backtracking([]);
  return result;
};
