class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>();
        for (const str of strs) {
            const letterFreqs = new Array(26).fill(0);
            for (const char of str) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                letterFreqs[index]++;
            }
            const stringifiedLetterFreqs = letterFreqs.join(',');
            if (!anagrams.has(stringifiedLetterFreqs)) 
                anagrams.set(stringifiedLetterFreqs, []);
            anagrams.get(stringifiedLetterFreqs)!.push(str);
        }

        return [...anagrams.values()];
    }
}
