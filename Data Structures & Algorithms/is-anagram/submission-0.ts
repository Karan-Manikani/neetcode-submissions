class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const letterFreqs = new Map<string, number>();
        for (let i = 0; i < s.length; i++) {
            if (!letterFreqs.has(s[i])) letterFreqs.set(s[i], 0);
            if (!letterFreqs.has(t[i])) letterFreqs.set(t[i], 0);
            letterFreqs.set(s[i], letterFreqs.get(s[i])! + 1);
            letterFreqs.set(t[i], letterFreqs.get(t[i])! - 1);
        }
        for (const [_, val] of letterFreqs.entries()) {
            if (val !== 0) return false;
        }

        return true;
    }
}
