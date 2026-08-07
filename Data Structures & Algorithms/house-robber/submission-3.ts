class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length < 2) return nums[0];
        let prevPrevLoot = nums[0]
        let prevLoot = Math.max(nums[0], nums[1]);
        for (let i = 2; i < nums.length; i++) {
            const currentLoot = Math.max(nums[i] + prevPrevLoot, prevLoot);
            prevPrevLoot = prevLoot;
            prevLoot = currentLoot;
        }

        return prevLoot;
    }
}
