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
var findMode = function (root) {
  let map = new Map();

  const travelTree = (root) => {
    if (root === null) return;

    travelTree(root.left);
    map.set(root.val, (map.get(root.val) || 0) + 1);
    travelTree(root.right);
  };

  travelTree(root);

  let maxCount = map.get(root.val);
  let res = [];

  for (let [key, value] of map) {
    if (value === maxCount) {
      res.push(key);
    }

    if (value > maxCount) {
      res = [];
      maxCount = value;
      res.push(key);
    }
  }

  return res;
};
