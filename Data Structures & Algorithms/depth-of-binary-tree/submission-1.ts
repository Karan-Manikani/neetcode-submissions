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
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;
        let head = 0;
        const queue: [TreeNode, number][] = [[root, 1]];
        let runningMaxDepth = 0;
        while (this.getQueueLength(head, queue)) {
            const [currentNode, currentLevel] = queue[head++];
            runningMaxDepth = Math.max(runningMaxDepth, currentLevel);
            if (currentNode.left) queue.push([currentNode.left, currentLevel + 1]);
            if (currentNode.right) queue.push([currentNode.right, currentLevel + 1]);
        }

        return runningMaxDepth;
    }

    getQueueLength(head: number, queue: [TreeNode, number][]): number {
        return queue.length - head;
    }
}
