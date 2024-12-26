/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let array = [...nums];
  array.sort((a, b) => a - b);
  let res = [];

  nums.forEach((item) => res.push(array.indexOf(item)));
  return res;
};
