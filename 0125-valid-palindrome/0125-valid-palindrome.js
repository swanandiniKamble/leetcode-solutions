/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanStr = cleanUp(s);
    return isPal(cleanStr);
};

function cleanUp(Str) {
    let char = "abcdefghijklmnopqrstuvwxyz0123456789";
    let newS = "";

    for (let i = 0; i < Str.length; i++) {
        let lcase = Str[i].toLowerCase();

        if (char.indexOf(lcase) !== -1) {
            newS += lcase;
        }
    }

    return newS;
}

function isPal(Str) {
    let left = 0;
    let right = Str.length - 1;

    while (left < right) {
        if (Str[left] !== Str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}