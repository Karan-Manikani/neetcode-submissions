class Solution {
    private combinations: string[] = [];
    private letterMap = new Map<string, string[]>([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']]
    ]);
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (!digits.length) return [];
        this.combinations = [];
        this.DFS('', 0, digits);
        return this.combinations;
    }

    DFS(currentCombination: string, idx: number, digits: string) {
        if (currentCombination.length === digits.length) {
            this.combinations.push(currentCombination);
            return;
        }
        for (const val of this.letterMap.get(digits[idx]))
            this.DFS(currentCombination + val, idx + 1, digits);
    }
}
