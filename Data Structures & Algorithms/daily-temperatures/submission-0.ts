class Solution {
    /**
     * @param {number[]} temps
     * @return {number[]}
     */
    dailyTemperatures(temps: number[]): number[] {
        const stack: number[][] = [];
        const output = new Array<number>(temps.length).fill(0);
        for (let i = 0; i < temps.length; i++) {
            if (stack.length === 0) {
                stack.push([temps[i], i]);
                continue;
            }
            while (stack.length > 0 && temps[i] > stack[stack.length - 1][0]) {
                const [_temp, idx] = stack.pop()!;
                output[idx] = i - idx;
            }
            stack.push([temps[i], i]);
        }

        return output;
    }
}
