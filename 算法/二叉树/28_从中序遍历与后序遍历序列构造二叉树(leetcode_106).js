/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null; // 注意⭐️：判断数组的长度

  let rootVal = postorder.pop();
  let rootIndex = inorder.indexOf(rootVal);
  let root = new TreeNode(rootVal);

  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );

  root.right = buildTree(
    inorder.slice(rootIndex + 1),
    postorder.slice(rootIndex)
  );

  return root;
};
