class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const INF = 2147483647
        const queue: number[][] = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 0) queue.push([i, j]);
            }
        }

        let cost = 1;
        let head = 0;
        while (this.queueLength(head, queue) !== 0) {
            const queueLength = this.queueLength(head, queue);
            for (let i = 0; i < queueLength; i++) {
                const [r, c] = queue[head++];
                const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
                for (const [x, y] of directions) {
                    const nr = r + x;
                    const nc = c + y;
                    if (nr < 0 || nc < 0 || nr >= grid.length || nc >= grid[0].length) 
                        continue;
                    if (grid[nr][nc] === INF) {
                        grid[nr][nc] = cost;
                        queue.push([nr, nc]);
                    }
                }
            }
            cost++;
        }
    }

    queueLength(head: number, queue: number[][]) {
        return queue.length - head;
    }
}
