/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let result = [];
  let path = [];

  const backtracking = (startIndex) => {
    if (path.length >= 2) {
      result.push(Array.from(path));
    }

    let uSet = []; // uset用来记录本层元素是否重复使用过,新的一层uset都会重新定义（清空）,所以要知道uset只负责本层！

    for (let i = startIndex; i < nums.length; i++) {
      if (
        (path.length > 0 && nums[i] < path[path.length - 1]) ||
        uSet[nums[i]]
      ) {
        continue;
      }

      uSet[nums[i]] = true;

      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);
  return result;
};
