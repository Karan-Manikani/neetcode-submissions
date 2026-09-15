class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === word[0] && this.doesWordExist(i, j, board, word, 0)) {
                    return true;
                }
            }
        }

        return false;
    }

    doesWordExist(row: number, col: number, board: string[][], word: string, idx: number): boolean {
        const rowInBounds = 0 <= row && row < board.length;
        const colInBounds = 0 <= col && col < board[0].length;
        if (!rowInBounds || !colInBounds) return false;
        if (board[row][col] === "#") return false;
        if (board[row][col] !== word[idx]) return false;
        if (idx === word.length - 1) return true;
        const temp = board[row][col]
        board[row][col] = "#";
        const wordFound = this.doesWordExist(row + 1, col, board, word, idx + 1) ||
        this.doesWordExist(row - 1, col, board, word, idx + 1) ||
        this.doesWordExist(row, col + 1, board, word, idx + 1) ||
        this.doesWordExist(row, col - 1, board, word, idx + 1);
        if (wordFound) return true;
        board[row][col] = temp;

        return false;
    }
}
