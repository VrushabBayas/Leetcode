/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let res = String(Number(String(digits.join(""))) + 1)
    .split("")
    .map((num) => +num);
  console.log("res: ", res);
};
plusOne([1, 0, 2, 3, 9]);
// @lc code=end
