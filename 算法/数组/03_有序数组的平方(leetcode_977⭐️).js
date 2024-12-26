// 双指针法⭐️⭐️⭐️
var sortedSquares = function (nums) {
  let n = nums.length;
  let i = 0;
  let j = n - 1;
  let k = n - 1;
  let res = new Array(n).fill(0);

  while (i <= j) {
    let left = nums[i] * nums[i];
    let right = nums[j] * nums[j];

    if (left < right) {
      res[k] = right;
      k--;
      j--;
    } else {
      res[k] = left;
      k--;
      i++;
    }
  }

  return res;
};
