/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];

  const traverse = (root) => {
    if (root === null) return;

    for (let item of root.children) {
      traverse(item);
    }

    res.push(root.val);
  };

  traverse(root);
  return res;
};
