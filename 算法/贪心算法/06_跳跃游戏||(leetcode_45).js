/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let curIndex = 0;
  let nextIndex = 0;
  let step = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(i + nums[i], nextIndex);

    if (i === curIndex) {
      step++;
      curIndex = nextIndex;
    }
  }

  return step;
};
