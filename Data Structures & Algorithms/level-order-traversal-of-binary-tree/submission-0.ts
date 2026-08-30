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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];
        const output: number[][] = [];
        const queue: TreeNode[] = [root];
        while (queue.length) {
            const queueLength = queue.length;
            const currentLevel: number[] = [];
            for (let i = 0; i < queueLength; i++) {
                const currentNode = queue.shift()!;
                currentLevel.push(currentNode.val);
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }
            output.push(currentLevel);
        }

        return output;
    }
}
