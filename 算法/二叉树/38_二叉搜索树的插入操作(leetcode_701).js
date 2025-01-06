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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root === null) {
    root = new TreeNode(val);
  } else {
    let parent = new TreeNode(0);
    let cur = root;

    while (cur) {
      parent = cur;

      if (cur.val > val) {
        cur = cur.left;
      } else {
        //cur.val < val
        cur = cur.right;
      }
    }

    let node = new TreeNode(val);
    if (parent.val > val) {
      parent.left = node;
    } else {
      // parent.val < val
      parent.right = node;
    }
  }

  return root;
};
