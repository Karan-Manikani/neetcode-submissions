interface QueueNode {
    dist: number,
    coordinates: [number, number]
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const distances: QueueNode[] = points.map((point) => {
            const dist =  this.euclideanDistance(point[0], point[1]);
            return { dist, coordinates: point } as QueueNode;
        })
        const pq = new PriorityQueue((a, b) => b.dist - a.dist);
        for (const distance of distances) {
            pq.enqueue(distance);
            if (pq.size() > k) {
                pq.dequeue();
            }
        }
        const output: [number, number][] = [];
        while (pq.size() !== 0) {
            const item = pq.dequeue();
            output.push(item.coordinates);
        }

        return output;
    }

    euclideanDistance(x: number, y: number): number {
        return (x ** 2) + (y ** 2);
    }
}

/**
 * Min heap of size k
 * For every point:
 * - calculate the distance from origin
 * - enqueue: { dist: X, point: [a, b] } ordered by dist.
 * - Once everything is enqueued, iterate over all elements to get the reislt.
 */