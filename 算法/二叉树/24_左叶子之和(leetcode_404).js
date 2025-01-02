/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归法
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0;
  let sum = 0;

  if (root.left && root.left.left === null && root.left.right === null) {
    sum += root.left.val;
  }

  sum += sumOfLeftLeaves(root.left);
  sum += sumOfLeftLeaves(root.right);

  return sum;
};
