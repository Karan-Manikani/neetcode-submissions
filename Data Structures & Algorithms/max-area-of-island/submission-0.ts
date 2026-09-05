class Solution {
    private readonly DIRECTIONS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let maxArea = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    maxArea = Math.max(maxArea, this.DFS(i, j, grid))
                }
            }
        }

        return maxArea;
    }

    DFS(row: number, col: number, grid: number[][]): number {
        const rowInBounds = 0 <= row && row < grid.length;
        const colInBounds = 0 <= col && col < grid[0].length;
        if (!rowInBounds || !colInBounds) return 0;
        if (grid[row][col] === 0) return 0;
        grid[row][col] = 0;

        return 1 + this.DFS(row + 1, col, grid) + 
        this.DFS(row, col + 1, grid) + 
        this.DFS(row - 1, col, grid) + 
        this.DFS(row, col - 1, grid);
    }
}
