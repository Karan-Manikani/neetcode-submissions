class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let largestArea = 0;
        while (left < right) {
            const height = Math.min(heights[left], heights[right]);
            const length = right - left;
            largestArea = Math.max(largestArea, height * length);
            if (heights[left] < heights[right]) left++;
            else right--;
        }

        return largestArea;
    }
}
