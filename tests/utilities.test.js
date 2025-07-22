// tests/utilities.test.js

const { sumOfArray, reverseString, isPalindrome, purgeDuplicates } = require('../modules/utilities');

describe("sumOfArray test cases", () => {
    test("Test numbers add correctly", () => {
        expect(sumOfArray([1, 2, 3])).toBe(6);
    });

    test("Test if not an array", () => {
        expect(() => sumOfArray("123")).toThrow(TypeError);
    });

    test("Test for strings in the array", () => {
        expect(() => sumOfArray([1, "a", 3])).toThrow(TypeError);
    });

    test("Test if array is empty", () => {
        expect(sumOfArray([])).toBe(0);
    });
});

describe("reverseString test cases", () => {
    test("Test for string reversal", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test("Test for string reversal with characters", () => {
        expect(reverseString("123!")).toBe("!321");
    });

    test("Test if it is a number", () => {
        expect(() => reverseString(123)).toThrow(TypeError);
    });
});

describe("isPalindrome test cases", () => {
    test("Test a palindrome", () => {
        expect(isPalindrome("level")).toBe(true);
    });

    test("Test a none palindrome", () => {
        expect(isPalindrome("hello")).toBe(false);
    });

    test("Test special characters or case", () => {
        expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    });

    test("Test for numbers", () => {
        expect(() => isPalindrome(12321)).toThrow(TypeError);
    });
});

describe("purgeDuplicates test cases", () => {
    test("Test removal of duplicates", () => {
        expect(purgeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test("Test objects correctly", () => {
        const obj = {};
        expect(purgeDuplicates([obj, obj])).toEqual([obj]);
    });

    test("Test if it is not an array", () => {
        expect(() => purgeDuplicates("Not an array")).toThrow(TypeError);
    });

    test("Test an empty array", () => {
        expect(purgeDuplicates([])).toEqual([]);
    });
});
