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
var findBottomLeftValue = function (root) {
  let resVal;
  let queue = [];

  if (root === null) return 0;
  queue.push(root);

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();

      if (i === 0) {
        resVal = node.val;
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return resVal;
};
