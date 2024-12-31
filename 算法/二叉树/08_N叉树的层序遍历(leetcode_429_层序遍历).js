/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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

      for (let item of node.children) {
        queue.push(item);
      }
    }

    res.push(currentLevel);
  }
  return res;
};
