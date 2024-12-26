/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 双指针⭐️⭐️⭐️
var validMountainArray = function (arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left < n && arr[left] < arr[left + 1]) {
    left++;
  }

  while (right > 0 && arr[right - 1] > arr[right]) {
    right--;
  }

  if (left === right && left !== 0 && right !== n - 1) {
    return true;
  }

  return false;
};
