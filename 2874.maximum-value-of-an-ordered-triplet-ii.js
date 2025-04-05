/*
 * @lc app=leetcode id=2874 lang=javascript
 *
 * [2874] Maximum Value of an Ordered Triplet II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;
  let maxValue = 0;

  // Precompute the maximum nums[i] for each position
  const maxLeft = new Array(n).fill(0);
  maxLeft[0] = nums[0];
  for (let i = 1; i < n; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], nums[i]);
  }

  // For each potential j, find the best i and k
  for (let j = 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      // The maximum value of nums[i] for all i < j
      const maxI = maxLeft[j - 1];
      const value = (maxI - nums[j]) * nums[k];
      maxValue = Math.max(maxValue, value);
    }
  }

  return maxValue;
};
maximumTripletValue([12, 6, 1, 2, 7]);
// @lc code=end
