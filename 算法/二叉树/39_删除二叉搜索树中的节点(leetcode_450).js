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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null;

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root; // 作用是返回当前节点（root），以便在树的结构中保持正确的链接
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root; // 作用是返回当前节点（root），以便在树的结构中保持正确的链接
  } else {
    if (root.left === null && root.right === null) {
      return null;
    } else if (root.left === null && root.right !== null) {
      return root.right;
    } else if (root.left !== null && root.right === null) {
      return root.left;
    } else {
      let rightNode = root.right;
      let minNode = getMinNode(rightNode);
      root.val = minNode.val;
      root.right = deleteNode(root.right, minNode.val);
      return root;
    }
  }
};

// 获取右子树最小值节点
const getMinNode = (root) => {
  while (root.left) {
    root = root.left;
  }
  return root;
};
