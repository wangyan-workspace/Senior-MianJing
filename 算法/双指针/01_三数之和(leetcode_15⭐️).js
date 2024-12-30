/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双指针
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // 注意⭐️：对数组进行排序
  let resArr = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      // 注意⭐️：nums经过排序后，只要nums[i]>0, 此后的nums[i] + nums[left] + nums[right]均大于0,可以提前终止循环
      return resArr;
    }
    // 去重 “a”
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];

      if (total > 0) {
        right--;
      } else if (total < 0) {
        left++;
      } else {
        resArr.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // 注意⭐️：去重的判断，在同时更新left、right左指针、右指针的逻辑里

        // 去重 “b”
        while (nums[left] === nums[left - 1]) {
          // 注意⭐️：使用while循环
          left++;
        }
        // 去重 “c”
        while (nums[right] === nums[right + 1]) {
          // 注意⭐️：使用while循环
          right--;
        }
      }
    }
  }

  return resArr;
};
