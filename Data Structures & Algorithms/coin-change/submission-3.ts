class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const dp = new Array<number>(amount + 1).fill(Infinity);
        dp[0] = 0;
        for (let i = 1; i < dp.length; i++) {
            let minCoinsNeeded = dp[i];
            for (const coin of coins) {
                if (coin <= i) minCoinsNeeded = Math.min(dp[i - coin] + 1, minCoinsNeeded);
            }
            dp[i] = minCoinsNeeded;
        }

        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}

//  0. 1. 2. 3
// [0, I, 0, 0]
// 

// [1,5,10]
//  0  1  2  3  4  5  6  7  8  9  10 11 12
// [0, I, 1, I, 2, 1, 3, 2, 4, 3, 1, 0, 2]
// dp[6] = min(coinChange(4) + 1, coinChange(1) + 1) = min(3, 1)
// dp[i] = min(for j in coins: coinChnage(i - j) + 1);
// dp[2] = min(CC(0) + 1)
// dp[3] = min(CC(1) + 1)
// dp[4] = min(CC(2) + 1)
// dp[5] = min(CC(3) + 1, CC(0) + 1) = min(I, 1) = 1;