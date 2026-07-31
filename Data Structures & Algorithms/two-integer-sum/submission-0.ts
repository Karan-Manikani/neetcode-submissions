class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const visited = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const missingNum = target - nums[i];
            if (visited.has(missingNum)) return [visited.get(missingNum)!, i];
            visited.set(nums[i], i);
        }

        return [];
    }
}
