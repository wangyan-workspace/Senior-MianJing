/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const buildTree = (nums, begin, end) => {
    if (begin === end) return null;

    let maxValue = nums[begin];
    let maxIndex = begin;

    for (let i = begin + 1; i < end; i++) {
      if (nums[i] > maxValue) {
        maxValue = nums[i];
        maxIndex = i;
      }
    }

    const root = new TreeNode(maxValue);

    root.left = buildTree(nums, begin, maxIndex);
    root.right = buildTree(nums, maxIndex + 1, end);

    return root;
  };

  return buildTree(nums, 0, nums.length);
};
