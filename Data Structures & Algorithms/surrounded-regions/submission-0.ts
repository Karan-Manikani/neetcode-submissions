class Solution {
    private visited: Set<string>;
    private readonly DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        this.visited = new Set<string>();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                const isEdgeCell = i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1
                if (isEdgeCell && board[i][j] === 'O') {
                    this.DFS(board, i, j);
                }
            }
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 'O') {
                    const key = i + ',' + j;
                    if (!this.visited.has(key)) board[i][j] = 'X';
                }
            }
        }
    }

    DFS(board: string[][], row: number, col: number): void {
        const rowInBounds = 0 <= row && row < board.length;
        const colInBounds = 0 <= col && col < board[0].length;
        if (!rowInBounds || !colInBounds) return;
        if (board[row][col] === "X") return;
        const key = row + "," + col;
        if (this.visited.has(key)) return;
        this.visited.add(key);
        for (const [x, y] of this.DIRECTIONS) {
            const nx = x + row;
            const ny = y + col;
            this.DFS(board, nx, ny);
        }
    }
}