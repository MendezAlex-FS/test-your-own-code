// modules/utilities.js

function sumOfArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input type expected: array");
    }

    // Loop through array and add sum (running total)
    // with the item value (val)
    return arr.reduce((sum, val) => {
        if (typeof val !== 'number') {
            throw new TypeError("Item has a string value");
        }

        return sum + val;
    }, 0);
}

function reverseString(str) {
    if (typeof str !== 'string') {
        throw new TypeError("Input type expected: string");
    }

    // Split into character array, 
    // reverse the array and join it back
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    if (typeof str !== 'string') {
        throw new TypeError("Input type expected: string");
    }

    // Make string lower case, remove all non-alphanumeric
    // then split it, reverse it, and join it back and compare
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

function purgeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input type expected: array");
    }

    // Create new set with array as it removes duplicates
    // then turn set back to an array
    return [...new Set(arr)];
}

module.exports = {
    sumOfArray,
    reverseString,
    isPalindrome,
    purgeDuplicates,
};
