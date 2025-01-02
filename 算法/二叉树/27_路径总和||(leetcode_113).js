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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (root === null) return [];
    let res = [];

    const getPath = (node, curPath, curSum) => {
        curPath.push(node.val);
        curSum += node.val; // 更新当前路径的和

        // 检查是否为叶子节点
        if (node.left === null && node.right === null) {
            // 如果路径和等于目标和，保存路径的副本
            if (curSum === targetSum) {
                res.push([...curPath]); // 使用展开运算符创建副本
            }
        } else {
            // 继续遍历左右子树
            if (node.left) getPath(node.left, curPath, curSum);
            if (node.right) getPath(node.right, curPath, curSum);
        }

        let popNode = curPath.pop(); // 回溯，移除当前节点值
        curSum -= popNode.val;
    };

    getPath(root, [], 0); // 初始路径和为 0
    return res;
};
