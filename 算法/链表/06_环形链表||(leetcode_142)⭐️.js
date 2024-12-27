/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针法：快慢指针
var detectCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) { // 注意⭐️：判断快指针和快指针的下一个节点均不为空
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      slow = head;

      while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
      }

      return slow;
    }
  }

  return null;
};
