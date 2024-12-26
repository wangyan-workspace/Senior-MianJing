/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let n = nums.length;
  let res = [];
  let evenIndex = 0;
  let oddIndex = 1;

  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      res[evenIndex] = nums[i];
      evenIndex += 2;
    } else {
      res[oddIndex] = nums[i];
      oddIndex += 2;
    }
  }

  return res;
};
