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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        if (!root) return false;
        return this.isValidBSTHelper(root, -Infinity, Infinity);
    }

    isValidBSTHelper(root: TreeNode | null, min: number, max: number) {
        if (!root) return true;
        if (root.val <= min || root.val >= max) return false;

        return this.isValidBSTHelper(root.left, min, root.val) && 
        this.isValidBSTHelper(root.right, root.val, max);
    }
}
