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
var averageOfLevels = function (root) {
  let res = [];
  let queue = [];

  if (root === null) return res;
  queue.push(root);

  while (queue.length) {
    let levelLength = queue.length;
    const length = queue.length;
    let sum = 0;

    while (levelLength) {
      let node = queue.shift();
      sum += node.val;

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      levelLength--; // 注意：计算完数值后，levelLength要减一
    }

    res.push(sum / length);
  }

  return res;
};
