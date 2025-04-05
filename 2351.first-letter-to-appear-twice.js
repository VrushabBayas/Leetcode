/*
 * @lc app=leetcode id=2351 lang=javascript
 *
 * [2351] First Letter to Appear Twice
 */

// @lc code=start
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let dictionary = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    dictionary.set(char, dictionary.get(char) + 1 || 1);

    if (dictionary.get(char) >= 2) return char;
  }
};
console.log(repeatedCharacter("abccbaacz") === "c"); // Expected output: true
console.log(repeatedCharacter("abcdd") === "d"); // Expected output: true
console.log(repeatedCharacter("aabbcc") === "a"); // Expected output: true
console.log(repeatedCharacter("abcdefg") === undefined); // Expected output: true
console.log(repeatedCharacter("a") === undefined); // Expected output: true
// @lc code=end
