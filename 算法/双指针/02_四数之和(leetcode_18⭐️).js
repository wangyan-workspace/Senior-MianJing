/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 双指针
var fourSum = function (nums, target) {
  let n = nums.length;
  let resArr = [];
  nums.sort((a, b) => a - b); // 注意⭐️：对数组进行排序

  if (n < 4) return resArr;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 去重(第一个数字)
      continue;
    }

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        // 去重(第二个数字)
        continue;
      }

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        let total = nums[i] + nums[j] + nums[left] + nums[right];

        if (total < target) {
          left++;
        } else if (total > target) {
          right--;
        } else {
          resArr.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          while (nums[left] === nums[left - 1]) {
            // 去重(第三个数字)
            left++;
          }
          while (nums[right] === nums[right + 1]) {
            // 去重(第四个数字)
            right--;
          }
        }
      }
    }
  }

  return resArr;
};
