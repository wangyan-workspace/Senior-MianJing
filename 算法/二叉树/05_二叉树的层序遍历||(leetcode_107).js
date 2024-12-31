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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];
  let queue = [];

  if (root === null) return res;
  queue.push(root);

  while (queue.length) {
    const length = queue.length;
    let currentLevel = [];

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      currentLevel.push(node.val); // 注意⭐️：需要将数值放到数组里
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    res.unshift(currentLevel);
  }

  return res;
};
