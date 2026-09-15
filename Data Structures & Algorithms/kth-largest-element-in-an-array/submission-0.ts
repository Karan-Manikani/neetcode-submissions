class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const pq = new PriorityQueue((a, b) => b - a);
        for (const num of nums) {
            pq.enqueue(num);
        }
        let kthSmallest = 0;
        for (let i = 0; i < k; i++) {
            kthSmallest = pq.dequeue();
        }

        return kthSmallest;
    }
}

// []