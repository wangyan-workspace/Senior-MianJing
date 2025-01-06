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
// 注意⭐️：二叉树、二叉搜索树的最近公共祖先的代码，均适用
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

// 利用二叉搜索树的特性
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return root;

  if (root.val < p.val && root.val < q.val) {
    root.right = lowestCommonAncestor(root.right, p, q);
    return root.right;
  }

  if (root.val > p.val && root.val > q.val) {
    root.left = lowestCommonAncestor(root.left, p, q);
    return root.left;
  }

  return root;
};
