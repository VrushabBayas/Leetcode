/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let m = haystack.length;
  let n = needle.length;
  let len = m - n;
  for (let windowStart = 0; windowStart < len; windowStart++) {
    for (let i = 0; i < n; i++) {
      if (needle[i] !== haystack[windowStart + i]) {
        break;
      }
      if (i === n - 1) return windowStart;
    }
  }
  return -1;
};
// @lc code=end
