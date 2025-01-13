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
var minCameraCover = function (root) {
  let result = 0;

  const travelsal = (cur) => {
    if (cur === null) {
      return 2;
    }

    // 0：无覆盖
    // 1：有摄像头
    // 2：有覆盖

    let left = travelsal(cur.left);
    let right = travelsal(cur.right);

    // 注意⭐️：标注节点状态的判断顺序不可以变
    // 遍历是从下往上，即后序遍历，状态从叶子结点开始标记，叶子节点是已覆盖的状态
    // 情况1:如果左右节点都覆盖了的话, 那么本节点的状态就应该是无覆盖,没有摄像头
    if (left === 2 && right === 2) {
      return 0;
    }
    // 情况2：左右节点至少有一个无覆盖的情况,中间节点此时应该放一个摄像头
    if (left === 0 || right === 0) {
      result++;
      return 1;
    }
    // 情况3：左右节点至少有一个有摄像头，那么本节点就是处于被覆盖状态
    if (left === 1 || right === 1) {
      return 2;
    }

    return -1;
  };

  // 情况4：头结点没有覆盖
  // 对根节点的状态做检验,防止根节点是无覆盖状态
  if (travelsal(root) === 0) {
    result++;
  }

  return result;
};
