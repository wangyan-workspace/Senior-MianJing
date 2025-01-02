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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;

  const compareNode = (left, right) => {
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      return false;
    } else if (left === null && right === null) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    }

    let inSide = compareNode(left.right, right.left); // 注意⭐️：对比的位置
    let outSide = compareNode(left.left, right.right);

    return inSide && outSide; // 注意⭐️：结果的返回
  };

  return compareNode(root.left, root.right);
};
