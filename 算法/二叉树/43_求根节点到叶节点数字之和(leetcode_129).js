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
var sumNumbers = function (root) {
  if (root === null) return 0;

  let path = [];
  let result = 0;

  const nodePathSum = (path) => {
    let sum = 0;

    for (let item of path) {
      sum = sum * 10 + item;
    }

    return sum;
  };

  const recur = (root) => {
    if (root.left === null && root.right === null) {
      result += nodePathSum(path);
      return;
    }

    if (root.left !== null) {
      path.push(root.left.val);
      recur(root.left);
      path.pop();
    }

    if (root.right !== null) {
      path.push(root.right.val);
      recur(root.right);
      path.pop();
    }
    return;
  };

  path.push(root.val);
  recur(root);
  return result;
};
