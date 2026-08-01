class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (!this.isAlphaNumeric(s[left].toLowerCase())) left++;
            else if (!this.isAlphaNumeric(s[right].toLowerCase())) right--;
            else if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            else {
                left++;
                right--;
            }
        }

        return true;
    }

    isAlphaNumeric(char: string): boolean {
        const isNumber = '0'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0);
        const isAlpha = 'a'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0);
        return isNumber || isAlpha;
    }
}
