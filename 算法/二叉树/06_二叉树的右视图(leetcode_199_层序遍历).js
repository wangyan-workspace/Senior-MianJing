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
// 层序遍历的时候，判断是否遍历到单层的最后面的元素，
// 如果是，就放进result数组中，随后返回result就可以了。
var rightSideView = function (root) {
  let res = [];
  let queue = [];

  if (root === null) return res;
  queue.push(root);

  while (queue.length) {
    let length = queue.length;

    while (length) {
      let node = queue.shift();

      if (length === 1) {
        res.push(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      length--;
    }
  }

  return res;
};
