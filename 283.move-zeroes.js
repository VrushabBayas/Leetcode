/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }

  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// Test cases
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

let nums2 = [0, 0, 1];
moveZeroes(nums2);
console.log(nums2); // Output: [1, 0, 0]

let nums3 = [2, 1];
moveZeroes(nums3);
console.log(nums3); // Output: [2, 1]

let nums4 = [0];
moveZeroes(nums4);
console.log(nums4); // Output: [0]
// @lc code=end
