class Solution {
    private readonly DIRECTIONS = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const output: number[][] = [];
        const pacificBoundaryNodes: [number, number][] = [];
        const atlanticBoundaryNodes: [number, number][] = [];
        const isPacificReachable: boolean[][] = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
        const isAtlanticReachable: boolean[][] = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (i === 0 || j === 0) {
                    pacificBoundaryNodes.push([i, j]);
                    isPacificReachable[i][j] = true;
                }
                if (i === ROWS - 1 || j === COLS - 1) {
                    atlanticBoundaryNodes.push([i, j]);
                    isAtlanticReachable[i][j] = true;
                }
            }
        }
        this.BFS(pacificBoundaryNodes, isPacificReachable, heights);
        this.BFS(atlanticBoundaryNodes, isAtlanticReachable, heights);
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (isPacificReachable[i][j] && isAtlanticReachable[i][j])
                    output.push([i, j])
            }
        }

        return output;
    }

    BFS(queue: number[][], grid: boolean[][], heights: number[][]) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        while (queue.length !== 0) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const [x, y] = queue.shift();
                for (const [dx, dy] of this.DIRECTIONS) {
                    const nx = dx + x;
                    const ny = dy + y;
                    const rowInBounds = 0 <= nx && nx < ROWS;
                    const colInBounds = 0 <= ny && ny < COLS;
                    if (!rowInBounds || !colInBounds) continue;
                    if (grid[nx][ny] === true) continue;
                    if (heights[nx][ny] >= heights[x][y]) {
                        queue.push([nx, ny]);
                        grid[nx][ny] = true;
                    }
                }
            }
        }
    }
}
