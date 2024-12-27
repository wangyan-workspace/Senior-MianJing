/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针法
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let temp = null;
  let pre = null;
  let cur = head;

  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  return pre; // 注意⭐️：pre指针就指向了新的头结点
};
