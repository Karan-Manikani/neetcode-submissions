/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists: ListNode[]): ListNode {
    let output = new ListNode();
    const head = output;
    const minPQ = new PriorityQueue((a, b) => a.val - b.val);
    for (const list of lists) {
      if (list) minPQ.enqueue(list);
    }
    while (minPQ.size() !== 0) {
      const node = minPQ.dequeue()!;
      if (node.next) minPQ.enqueue(node.next);
      output.next = node;
      output = output.next;
    }

    return head.next;
  }
}
