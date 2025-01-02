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
var largestValues = function (root) {
  let res = [];
  let queue = [];

  if (root === null) return res;
  queue.push(root);

  while (queue.length) {
    const length = queue.length;
    let maxValue = -Infinity;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      maxValue = Math.max(maxValue, node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    res.push(maxValue);
  }

  return res;
};
