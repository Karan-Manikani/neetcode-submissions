/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    private goodNodesCount: number = 0;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        this.goodNodesCount = 0;
        this.DFS(root, -Infinity);
        return this.goodNodesCount;
    }

    DFS(currentNode: TreeNode | null, max: number): void {
        if (!currentNode) return;
        if (currentNode.val >= max) this.goodNodesCount++;
        this.DFS(currentNode.left, Math.max(max, currentNode.val));
        this.DFS(currentNode.right, Math.max(max, currentNode.val));
    }
}
