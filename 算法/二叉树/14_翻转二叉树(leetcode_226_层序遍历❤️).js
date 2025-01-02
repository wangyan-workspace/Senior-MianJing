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
var invertTree = function (root) {
  // 先定义节点交换函数
  const invertCode = (root, left, right) => {
    let temp = left;
    left = right;
    right = temp;
    root.left = left;
    root.right = right;
  };

  // 层序遍历
  let queue = [];
  if (root === null) return null;
  queue.push(root);

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      invertCode(node, node.left, node.right);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};
