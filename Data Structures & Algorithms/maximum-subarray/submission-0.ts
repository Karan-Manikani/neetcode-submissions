class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        const dp = new Array(nums.length).fill(0);
        dp[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        }

        return Math.max(...dp);
    }
}

// [2,-3, 4,-2, 2, 1,-1, 4]
// [2,-1, 4, 2, 4, 5, 4, 8]