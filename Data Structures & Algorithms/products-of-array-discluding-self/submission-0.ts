class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const leftSideProducts = new Array<number>(nums.length).fill(1);
        const rightSideProducts = new Array<number>(nums.length).fill(1);
        for (let i = 1; i < nums.length; i++) {
            leftSideProducts[i] = leftSideProducts[i - 1] * nums[i - 1];
            rightSideProducts[nums.length - i - 1] = rightSideProducts[nums.length - i] * nums[nums.length - i];
        }
        const output = new Array<number>(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            output[i] = leftSideProducts[i] * rightSideProducts[i];
        }
        return output;
    }
}
