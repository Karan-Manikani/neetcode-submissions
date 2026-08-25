class Solution {
    private idxOfZeros: [number, number][] = [];
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix: number[][]): void {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    this.idxOfZeros.push([i, j]);
                }
            }
        }

        for (const [row, col] of this.idxOfZeros) {
            this.editRow(row, matrix);
            this.editCol(col, matrix);
        }
    }

    editRow(row: number, matrix: number[][]): void {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[row][col] = 0;
        }
    }

    editCol(col: number, matrix: number[][]): void {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][col] = 0;
        }
    }
}
