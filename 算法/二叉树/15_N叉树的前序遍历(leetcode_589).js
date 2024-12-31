/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];

  if (root === null) return res;
  res.push(root.val);

  if (root.children) {
    root.children.forEach((item) => {
      res = [...res, ...preorder(item)];
    });
  }

  return res;
};

var preorder = function (root) {
  let res = [];

  const traverse = (root) => {
    if (root === null) return;

    res.push(root.val);

    for (let item of root.children) {
      traverse(item);
    }
  };

  traverse(root);
  return res;
};
