/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const reverseList = (head) => {
    let pre = null;
    let temp = null;
    let cur = head;

    while (cur) {
      temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }

    return pre; // 注意⭐️：返回头结点
  };

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let right = slow.next;
  slow.next = null;
  right = reverseList(right);

  let left = head;

  while (right !== null) {
    let curLeft = left.next;
    left.next = right;
    left = curLeft;

    let curRight = right.next;
    right.next = left;
    right = curRight;
  }

  return head;
};
