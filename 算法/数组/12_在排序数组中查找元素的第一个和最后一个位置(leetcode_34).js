/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 找左边界
  const getLeftBorder = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let leftBorder = -2;

    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      if (nums[mid] >= target) {
        right = mid - 1;
        leftBorder = right;
      } else {
        left = mid + 1;
      }
    }

    return leftBorder;
  };

  // 找右边界
  const getRightBorder = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let rightBorder = -2;

    while (left <= right) {
      let mid = left + ((right - left) >> 1);

      if (nums[mid] <= target) {
        left = mid + 1;
        rightBorder = left;
      } else {
        right = mid - 1;
      }
    }

    return rightBorder;
  };

  let leftBorderNum = getLeftBorder(nums, target);
  let rightBorderNum = getRightBorder(nums, target);

  if (leftBorderNum === -2 || rightBorderNum === -2) {
    return [-1, -1];
  }

  if (rightBorderNum - leftBorderNum > 1) {
    return [leftBorderNum + 1, rightBorderNum - 1];
  }

  return [-1, -1];
};
