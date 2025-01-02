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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = [];

  const getPath = (node, curPath) => {
    if (node.left === null && node.right === null) {
      curPath += node.val;
      res.push(curPath);
      return;
    }

    curPath += node.val + "->";
    node.left && getPath(node.left, curPath);
    node.right && getPath(node.right, curPath);
  };

  getPath(root, ""); // 注意⭐️：外层调用递归函数
  return res;
};


var binaryTreePaths = function (root) {
  let res = [];

  const getPath = (node, curPath) => {
      curPath.push(node.val);

      if (node.left === null && node.right === null) {
          res.push([...curPath].join('->'));
      } else {
          node.left && getPath(node.left, curPath);
          node.right && getPath(node.right, curPath);
      }

      curPath.pop();
  };

  getPath(root, []);
  return res;
};
