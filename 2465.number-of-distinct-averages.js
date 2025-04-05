/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b);
  let averages = new Map();
  let distinctAvg = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let avg = (averages[left] + averages[right]) / 2;
    if (averages.get(avg)) {
      map.set(avg, avarges.get(avg) + 1);
    } else {
      averages.set(avg, avg);
      distinctAvg++;
    }
    left++;
    right--;
  }
  return distinctAvg;
};
distinctAverages([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);
