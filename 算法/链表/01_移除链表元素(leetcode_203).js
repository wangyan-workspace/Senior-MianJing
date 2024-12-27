/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let res = new ListNode(0, head);
  let cur = res;

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      /* 
                跳过当前循环的剩余部分：当 cur.next.val === val 时，
                表示当前节点的下一个节点是需要被删除的节点。
                通过 cur.next = cur.next.next; 
                将当前节点的 next 指向下一个节点，从而跳过了要删除的节点。
                
                进入下一次循环：continue 语句会导致控制流立即跳到 while 循环的条件判断部分，
                而不会执行 cur = cur.next; 这行代码。
                这意味着在删除节点后，cur 仍然指向当前节点，而不是移动到下一个节点。
                这是因为我们需要检查当前节点的下一个节点（即可能被删除的节点）是否也需要被删除。
            */
      continue; // 注意⭐️：跳过当前循环的剩余部分
    }
    cur = cur.next;
  }

  return res.next;
};
