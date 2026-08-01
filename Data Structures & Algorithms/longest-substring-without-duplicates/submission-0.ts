class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let start = 0;
        let end = 0;
        let longestSubstring = 0;
        const visited = new Set<string>();
        while (end < s.length) {
            const currentChar = s[end];
            while (visited.has(currentChar)) {
                visited.delete(s[start]);
                start++;
            }
            visited.add(currentChar);
            longestSubstring = Math.max(longestSubstring, end - start + 1);
            end++;
        }
        
        return longestSubstring
    }
}
