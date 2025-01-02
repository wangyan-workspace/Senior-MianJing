/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  let maxDepth = 0;
  let queue = [];

  if (root === null) return maxDepth;
  queue.push(root);

  while (queue.length) {
    maxDepth += 1;
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift(); // 注意⭐️：从前面弹出节点

      for (let child of node.children) {
        child && queue.push(child);
      }
    }
  }

  return maxDepth;
};
