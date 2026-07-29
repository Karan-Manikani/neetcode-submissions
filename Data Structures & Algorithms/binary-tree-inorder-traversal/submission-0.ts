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
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        const output: number[] = []
        this.DFS(root, output)
        return output;
    }

    DFS(root: TreeNode | null, output: number[]): void {
        if (!root) return;
        this.DFS(root.left, output);
        output.push(root.val);
        this.DFS(root.right, output);
    }

}
