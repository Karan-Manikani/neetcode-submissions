class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => Array.from({ length: 0 }));
        const freqs = new Map<number, number>();
        const output: number[] = [];
        for (const num of nums) {
            if (!freqs.has(num)) freqs.set(num, 0);
            freqs.set(num, freqs.get(num)! + 1);
        }
        for (const [key, val] of freqs.entries()) 
            buckets[val].push(key);
        for (let i = buckets.length - 1; i >=0; i--) {
            for (const val of buckets[i]) {
                if (output.length === k) break
                output.push(val);
            }
        }

        return output;
    }
}
