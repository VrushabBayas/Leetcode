/*
 * @lc app=leetcode id=2460 lang=javascript
 *
 * [2460] Apply Operations to an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] + nums[i + 1];
      nums[i + 1] = 0;
    }
  }
  let insertPosition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPosition] = nums[i];
      insertPosition++;
    }
  }
  while (insertPosition < nums.length) {
    nums[insertPosition++] = 0;
  }
  return nums;
};
applyOperations([1, 2, 2, 1, 1, 0]);
// @lc code=end
