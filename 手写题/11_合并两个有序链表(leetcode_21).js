/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const newHead = new ListNode(0, null); // 创建一个新的虚拟头节点（值为 0），用于简化合并操作。这个节点不会出现在最终的结果中，但可以方便地处理链表的连接
  let pre = newHead; // 指向当前合并链表的最后一个节点，初始时指向newHead

  while (list1 && list2) {
    // 当两个链表都不为空时，继续合并
    if (list1.val < list2.val) {
      // 如果 list1 的当前节点值小于 list2 的当前节点值，则将 list1 的当前节点连接到合并链表，并将 list1 移动到下一个节点
      pre.next = list1;
      list1 = list1.next;
    } else {
      // 否则，将 list2 的当前节点连接到合并链表，并将 list2 移动到下一个节点。
      pre.next = list2;
      list2 = list2.next;
    }
    pre = pre.next;
  }

  // 在 while 循环结束后，可能有一个链表还有剩余的节点。
  // 此时，将剩余的节点直接连接到合并链表的末尾
  if (list1) {
    pre.next = list1;
  }

  if (list2) {
    pre.next = list2;
  }

  return newHead.next; // 返回合并后的链表的头节点，newHead.next 指向合并链表的第一个有效节点（即去掉虚拟头节点后的结果）
};
