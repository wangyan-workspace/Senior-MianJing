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
var balanceBST = function (root) {
  let result = [];

  const travelTree = (root) => {
    if (!root) return null;
    travelTree(root.left);
    result.push(root.val);
    travelTree(root.right);
  };

  const getTree = (nums, start, end) => {
    if (start > end) return null;

    let mid = start + ((end - start) >> 1);
    let root = new TreeNode(nums[mid]);
    root.left = getTree(nums, start, mid - 1);
    root.right = getTree(nums, mid + 1, end);

    return root;
  };

  travelTree(root);
  return getTree(result, 0, result.length - 1);
};
