/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 反转链表
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
    return pre;
  };

  let fast = head;
  let slow = head;
  let pre = head;

  while (fast && fast.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  pre.next = null;
  let cur1 = head;
  let cur2 = reverseList(slow);

  while (cur1) {
    if (cur1.val !== cur2.val) {
      return false;
    }

    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  return true;
};
