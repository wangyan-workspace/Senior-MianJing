/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const travelTree = (root, p, q) => {
    if (root === null || root === p || root === q) {
      return root;
    }

    let left = travelTree(root.left, p, q);
    let right = travelTree(root.right, p, q);

    if (left !== null && right !== null) {
      return root;
    }

    if (left === null) {
      return right;
    }

    if (right === null) {
      return left;
    }
  };

  return travelTree(root, p, q);
};
