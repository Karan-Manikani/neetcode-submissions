class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const parenthesesMapper = new Map<string, string>([['}', '{'], [')', '('], [']', '[']]);
        for (const parenthesis of s) {
            if (parenthesesMapper.has(parenthesis)) {
                const openingParenthesis = stack.pop();
                if (parenthesesMapper.get(parenthesis) !== openingParenthesis) return false;
            } else {
                stack.push(parenthesis);
            }
        }

        return stack.length === 0;
    }
}
