class Solution {
    private readonly DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const rottenOranges: [number, number][] = [];
        let timeElapsed = 0;
        let totalOranges = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] !== 0) totalOranges++;
                if (grid[i][j] === 2) rottenOranges.push([i, j]);
            }
        }
        let totalRottenOranges = rottenOranges.length;
        while (rottenOranges.length !== 0 && totalRottenOranges !== totalOranges) {
            const numRottenOranges = rottenOranges.length;
            for (let i = 0; i < numRottenOranges; i++) {
                const [x, y] = rottenOranges.shift();
                for (const [dx, dy] of this.DIRECTIONS) {
                    const nx = x + dx;
                    const ny = y + dy;
                    const rowInBounds = 0 <= nx && nx < grid.length;
                    const colInBounds = 0 <= ny && ny < grid[0].length;
                    if (!rowInBounds || !colInBounds) continue;
                    if (grid[nx][ny] !== 1) continue;
                    grid[nx][ny] = 2;
                    totalRottenOranges++;
                    rottenOranges.push([nx, ny]);
                }
            }
            timeElapsed++;
        }

        return totalRottenOranges !== totalOranges ? -1 : timeElapsed;
    }
}
