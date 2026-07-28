class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSumYet = nums[0];
        let largestSum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            maxSumYet = Math.max(nums[i], maxSumYet + nums[i]);
            largestSum = Math.max(largestSum, maxSumYet);
        }

        return largestSum;
    }
}
