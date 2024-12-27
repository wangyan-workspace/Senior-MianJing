/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 双指针法
var removeNthFromEnd = function (head, n) {
  let newNode = new ListNode(0, head);
  let fast = newNode;
  let slow = newNode;

  while (n) {
    fast = fast.next;
    n--;
  }

  while (fast?.next !== null) {
    // 注意⭐️：快指针走到最后一个节点时，慢指针指向倒数第n个节点的前一个节点
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return newNode.next;
};
