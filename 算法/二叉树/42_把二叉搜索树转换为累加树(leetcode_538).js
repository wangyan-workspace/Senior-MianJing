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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let parent = 0;
  const reverseInOrder = (cur) => {
    if (cur) {
      reverseInOrder(cur.right);
      cur.val += parent;
      parent = cur.val;
      reverseInOrder(cur.left);
    }
  };
  reverseInOrder(root);
  return root;
};
