/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");

    // Number of letters and words must be the same
    if (pattern.length !== words.length) {
        return false;
    }

    const patternToWord = new Map();
    const wordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // Check if the existing mappings conflict
        if (
            (patternToWord.has(char) &&
             patternToWord.get(char) !== word) ||

            (wordToPattern.has(word) &&
             wordToPattern.get(word) !== char)
        ) {
            return false;
        }

        // Store mapping in both directions
        patternToWord.set(char, word);
        wordToPattern.set(word, char);
    }

    return true;
};