class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const s1Freqs = new Array<number>(26).fill(0);
        for (const letter of s1) {
            const idx = this.getLetterIdx(letter);
            s1Freqs[idx] += 1;
        }
        let start = 0;
        const s2Freqs = new Array<number>(26).fill(0);
        for (let end = 0; end < s2.length; end++) {
            const idx = this.getLetterIdx(s2[end]);
            s2Freqs[idx] += 1;
            if (end - start === s1.length - 1) {
                if (s2Freqs.join('.') === s1Freqs.join('.')) return true;
                const idx = this.getLetterIdx(s2[start]);
                s2Freqs[idx] -= 1;
                start++;
            }
        }

        return false;
    }

    getLetterIdx(letter: string): number {
        return letter.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}
