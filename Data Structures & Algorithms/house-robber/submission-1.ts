class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length < 2) return nums[0];
        const totalLoot = new Array<number>(nums.length).fill(0);
        totalLoot[0] = nums[0];
        totalLoot[1] = Math.max(nums[0], nums[1]);
        for (let i = 2; i < totalLoot.length; i++) {
            totalLoot[i] = Math.max(nums[i] + totalLoot[i - 2], totalLoot[i - 1]);
        }

        return totalLoot[totalLoot.length - 1];
    }
}
