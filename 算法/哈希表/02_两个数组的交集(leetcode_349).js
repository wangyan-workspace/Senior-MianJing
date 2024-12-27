/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let nums1Arr = new Set(nums1);
  let res = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Arr.has(nums2[i])) {
      res.add(nums2[i]); // 注意⭐️：new Set创建的数据结构，添加元素调用的方法是add
    }
  }

  return Array.from(res);
};
