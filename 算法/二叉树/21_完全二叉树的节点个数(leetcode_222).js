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
var countNodes = function (root) {
  if (root === null) return 0;

  let left = root.left;
  let right = root.right;
  let leftDepth = 0;
  let rightDepth = 0;

  while (left) {
    left = left.left;
    leftDepth++;
  }

  while (right) {
    right = right.right;
    rightDepth++;
  }

  if (leftDepth === rightDepth) {
    return Math.pow(2, leftDepth + 1) - 1; //注意⭐️：返回节点个数(直接用 2^树深度 - 1 来计算)
  }

  return countNodes(root.left) + countNodes(root.right) + 1;
};
