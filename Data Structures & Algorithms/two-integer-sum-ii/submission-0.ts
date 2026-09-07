class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum > target) right--;
            else if (sum < target) left++;
            else return [left + 1, right + 1];
        }

        return [];
    }
}
