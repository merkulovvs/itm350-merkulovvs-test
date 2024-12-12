const isPalindrome = (str) => {
    const cleanedStr = str.toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;

};

module.exports = isPalindrome;