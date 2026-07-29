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
        const output: number[] = [];
        const stack: TreeNode[] = [];
        let currentNode = root;
        while (currentNode || stack.length > 0) {
            while (currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }
            currentNode = stack.pop();
            output.push(currentNode.val);
            currentNode = currentNode.right;
        }

        return output;
    }
}
