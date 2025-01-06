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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let arr = [];

  // 中序遍历
  const buildArr = (root) => {
    // 注意⭐️：在root存在的情况下
    if (root) {
      buildArr(root.left);
      arr.push(root.val);
      buildArr(root.right);
    }
  };

  buildArr(root);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      // 注意⭐️：判断条件是小于等于
      return false;
    }
  }

  return true;
};
