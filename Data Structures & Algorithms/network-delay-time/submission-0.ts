interface Destination {
    value: number,
    cost: number
}

class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const minimumTimes = new Array<number>(n + 1).fill(Infinity);
        const adjacencyList = this.buildAdjacencyList(times);
        const pq = new PriorityQueue((a, b) => a.cost - b.cost);
        minimumTimes[0] = -1;
        minimumTimes[k] = 0;
        pq.enqueue({ value: k, cost: 0 })
        while (pq.size() !== 0) {
            const currentNode = pq.dequeue();
            for (const neighbor of adjacencyList.get(currentNode.value) ?? []) {
                const costToDest = neighbor.cost + currentNode.cost;
                if (costToDest < minimumTimes[neighbor.value]) {
                    minimumTimes[neighbor.value] = costToDest;
                    pq.enqueue({ value: neighbor.value, cost: costToDest });
                }
            }
        }
        const maxTime = Math.max(...minimumTimes);

        return maxTime === Infinity ? -1 : maxTime;
    }

    buildAdjacencyList(times: number[][]): Map<number, Destination[]> {
        const adjacencyList = new Map<number, Destination[]>();
        for (const time of times) {
            const [src, dest, cost] = time;
            if (!adjacencyList.has(src)) adjacencyList.set(src, []);
            adjacencyList.get(src).push({ value: dest, cost });
        }

        return adjacencyList;
    }
}
