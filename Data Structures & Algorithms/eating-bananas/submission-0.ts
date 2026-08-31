class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const maxBananas = Math.max(...piles);
        let left = 1;
        let right = maxBananas;
        let minSpeed = Infinity;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (this.canFinishPile(mid, h, piles)) {
                minSpeed = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return minSpeed;
    }

    canFinishPile(k: number, h: number, piles: number[]): boolean {
        let totalHoursElapsed: number = 0;
        for (const pile of piles) {
            const hoursToFinish = Math.ceil(pile / k);
            totalHoursElapsed += hoursToFinish;
            if (totalHoursElapsed > h) return false;
        }

        return true;
    }
}
