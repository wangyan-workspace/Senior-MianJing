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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (root === null) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function (left, right) {
  if ((left === null && right !== null) || (left !== null && right === null)) {
    return false;
  } else if (left === null && right === null) {
    return true;
  } else if (left.val !== right.val) {
    return false;
  }

  let inSide = isSameTree(left.left, right.left);
  let outSide = isSameTree(left.right, right.right);

  return inSide && outSide;
};
