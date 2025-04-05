/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let max = -1;
  for (let [key, value] of map) {
    if (value === 1 && key > max) {
      max = num;
    }
  }
  return max;
};

console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])); // Output should be 8
console.log(largestUniqueNumber([9, 9, 8, 8])); // Output should be -Infinity (or some indication of no unique number)
console.log(largestUniqueNumber([1, 2, 2, 3, 3])); // Output should be 1
