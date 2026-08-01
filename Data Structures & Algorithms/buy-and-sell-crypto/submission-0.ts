class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowestBuyingPrice = Infinity;
        let maxProfit = 0;
        for (const price of prices) {
            if (price < lowestBuyingPrice) lowestBuyingPrice = price;
            maxProfit = Math.max(price - lowestBuyingPrice, maxProfit);
        }

        return maxProfit;
    }
}
