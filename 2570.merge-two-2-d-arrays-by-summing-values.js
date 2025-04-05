/*
 * @lc app=leetcode id=2570 lang=javascript
 *
 * [2570] Merge Two 2D Arrays by Summing Values
 */

// @lc code=start
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let left = 0;
  let right = 0;
  let result = [];
  let index = 0;
  while (left < nums1.length && right < nums2.length) {
    const [id1, value1] = nums1[left];
    const [id2, value2] = nums2[right];
    if (id1 === id2) {
      result[index] = [id1, value1 + value2];
      left++;
      right++;
      index++;
    } else if (id1 < id2) {
      result[index++] = [id1, value1];
      left++;
    } else {
      result[index++] = [id2, value2];
      right++;
    }
  }
  while (left < nums1.length) {
    result[index++] = nums1[left];
    left++;
  }
  while (right < nums2.length) {
    result[index++] = nums1[right];
    right++;
  }
  return result;
};
// Test cases
console.log(
  mergeArrays(
    [
      [148, 597],
      [165, 623],
      [306, 359],
      [349, 566],
      [403, 646],
      [420, 381],
      [566, 543],
      [730, 209],
      [757, 875],
      [788, 208],
      [932, 695],
    ],
    [
      [74, 669],
      [87, 399],
      [89, 165],
      [99, 749],
      [122, 401],
      [138, 16],
      [144, 714],
      [148, 206],
      [177, 948],
      [211, 653],
      [285, 775],
      [309, 289],
      [349, 396],
      [386, 831],
      [403, 318],
      [405, 119],
      [420, 153],
      [468, 433],
      [504, 101],
      [566, 128],
      [603, 688],
      [618, 628],
      [622, 586],
      [641, 46],
      [653, 922],
      [672, 772],
      [691, 823],
      [693, 900],
      [756, 878],
      [757, 952],
      [770, 795],
      [806, 118],
      [813, 88],
      [919, 501],
      [935, 253],
      [982, 385],
    ]
  )
); // Expected output: [[1, 6], [2, 3], [3, 2], [4, 6]]
