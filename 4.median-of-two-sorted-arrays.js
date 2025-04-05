/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let left = 0;
  let right = 0;
  let index = 0;
  let length = nums1.length + nums2.length;
  let result = new Array(length);
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] > nums2[right]) {
      result[index] = nums2[right];
      right++;
    } else {
      result[index] = nums1[left];
      left++;
    }
    index++;
  }
  while (left < nums1.length) {
    result[index] = nums1[left];
    left++;
    index++;
  }
  while (right < nums2.length) {
    result[index] = nums2[right];
    right++;
    index++;
  }

  return length / 2 !== 0
    ? Math.floor(result[length / 2])
    : result[Math.floor(length / 2)] / result[Math.floor(length / 2) - 1] / 2;
};
// @lc code=end
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0
