class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result: number[][] = [];
        const subset: number[] = [];
        this.subsetsHelper(nums, 0, subset, result);
        return result;
    }

    subsetsHelper(nums: number[], idx: number, subset: number[], result: number[][]): void {
        if (idx === nums.length) {
            result.push([...subset]);
            return;
        }
        subset.push(nums[idx]);
        this.subsetsHelper(nums, idx + 1, subset, result);
        subset.pop();
        this.subsetsHelper(nums, idx + 1, subset, result);
    }
}
