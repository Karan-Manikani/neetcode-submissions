class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const pq = new PriorityQueue((a, b) => b - a);
        for (const stone of stones) {
            pq.enqueue(stone);
        }
        while (pq.size() !== 0) {
            if (pq.size() === 1) return pq.dequeue();
            const stone1 = pq.dequeue();
            const stone2 = pq.dequeue();
            if (Math.abs(stone1 - stone2) === 0) continue;
            pq.enqueue(Math.abs(stone1 - stone2));
        }

        return 0
    }
}
