class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let totalPalindromes = 0;
        for (let i = 0; i < s.length; i++) {
            let left = i;
            let right = i;
            let oddLengthPalindromes = 0;
            let evenLengthPalindromes = 0;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                oddLengthPalindromes++;
                left--;
                right++;
            }
            left = i;
            right = i + 1;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                evenLengthPalindromes++;
                left--;
                right++;
            }
            totalPalindromes += oddLengthPalindromes + evenLengthPalindromes;
        }

        return totalPalindromes;
    }
}
