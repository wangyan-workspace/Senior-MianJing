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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  const traversal = (node, cnt) => {
    if (cnt === 0 && !node.left && !node.right) return true;
    if (!node.left && !node.right) return false;
    if (node.left && traversal(node.left, cnt - node.left.val)) return true;
    if (node.right && traversal(node.right, cnt - node.right.val)) return true;
    return false;
  };

  return traversal(root, targetSum - root.val);
};
