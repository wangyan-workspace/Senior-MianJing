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
var minDepth = function (root) {
  let depth = 0;
  let queue = [];

  if (root === null) return depth; //注意⭐️：如果根节点为空，则最小深度为0
  queue.push(root); //注意⭐️：将根节点加入队列

  while (queue.length) {
    depth += 1;
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();

      if (node.left === null && node.right === null) {
        return depth;
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
};
