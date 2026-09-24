class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n: number): number {
        if (n === 0) return 0;
        if (n === 1 || n === 2) return 1;
        let prev1 = 0;
        let prev2 = 1;
        let prev3 = 1;
        for (let i = 0; i <= n - 3; i++) {
            const nextNum = prev1 + prev2 + prev3;
            prev1 = prev2;
            prev2 = prev3;
            prev3 = nextNum;
        }

        return prev3;
    }
}
