class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const letterFreqs = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            const charIndexS = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            const charIndexT = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
            letterFreqs[charIndexS]++;
            letterFreqs[charIndexT]--;
        }

        return letterFreqs.every((freq) => freq === 0);
    }
}
