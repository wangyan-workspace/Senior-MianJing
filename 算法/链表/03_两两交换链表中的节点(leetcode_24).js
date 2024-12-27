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
var swapPairs = function (head) {
  let res = new ListNode(0, head);
  let temp = res;

  while (temp.next && temp.next.next) {
    let pre = temp.next;
    let cur = temp.next.next;

    // 注意⭐️：顺序不能变
    pre.next = cur.next;
    cur.next = pre;
    temp.next = cur;

    temp = pre;
  }

  return res.next;
};
