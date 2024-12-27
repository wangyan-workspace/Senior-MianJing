/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getListLength = function (head) {
  let len = 0;
  let cur = head;

  while (cur) {
    cur = cur.next;
    len++;
  }

  return len;
};

var getIntersectionNode = function (headA, headB) {
  let curA = headA;
  let curB = headB;
  let lenA = getListLength(headA);
  let lenB = getListLength(headB);

  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }

  let i = lenA - lenB;
  while (i) {
    curA = curA.next;
    i--;
  }

  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }

  return curA;
};
