class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const uniqueNums = new Set<number>(nums);
        let longestOverall = 0;
        for (const num of nums) {
            const isStartOfSeq = !uniqueNums.has(num - 1);
            if (isStartOfSeq) {
                let longestSeq = 0;
                let currentNum = num;
                while (uniqueNums.has(currentNum)) {
                    longestSeq++;
                    currentNum++;
                }
                longestOverall = Math.max(longestSeq, longestOverall);
            }
        }

        return longestOverall;
    }
}
