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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let prevNode = null;
        let currentNode = head;
        let forwardNode = head;
        for (let i = 0; i < n; i++)
            forwardNode = forwardNode.next;
        while (forwardNode) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            forwardNode = forwardNode.next;
        }
        if (!prevNode)
            return head.next;
        prevNode.next = currentNode.next;

        return head;
    }
}
