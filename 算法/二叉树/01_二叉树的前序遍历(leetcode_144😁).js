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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];

  const traverse = (root) => {
    if (root === null) return;

    res.push(root.val); // 注意⭐️：将值添加到结果数组中
    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);
  return res;
};
