const isPalindrome = require('../src/palindrome');

describe('isPalindrome', () => {
    it('return true if Palindrome', () => {
        expect(isPalindrome('tacocat')).toBe(true);
    });
    it('return false if not palindrome', () => {
        expect(isPalindrome('bobcat')).toBe(false);
    });
    it('ignore casing', () => {
        expect(isPalindrome('Tacocat')).toBe(true);
    });
});