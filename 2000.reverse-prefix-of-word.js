/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let arr = word.split("");
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ch) {
      k = i;
      return;
    }
  }
  let left = 0;
  while (left < k) {
    [arr[left], arr[k]] = [arr[k], arr[left]];
    left++;
    k--;
  }
  return arr.join("");
};
console.log(reversePrefix("abcdefd", "d")); // Output: "dcbaefd"
console.log(reversePrefix("xyxzxe", "z")); // Output: "zxyxxe"
console.log(reversePrefix("abcd", "z")); // Output: "abcd"
