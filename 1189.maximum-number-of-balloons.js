/*
 * @lc app=leetcode id=1189 lang=javascript
 *
 * [1189] Maximum Number of Balloons
 */

// @lc code=start

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let map = new Map();
  let match = "balloon";
  for (let i = 0; i < text.length; i++) {
    if (match.includes(text[i])) {
      map.set(text[i], (map.get(text[i]) || 0) + 1);
    }
  }
  if (map.size < match.length - 2) return 0;
  map.set("l", Math.floor(map.get("l") / 2));
  map.set("o", Math.floor(map.get("o") / 2));

  return Math.min(...Array.from(map.values()));
};

// @lc code=end
console.log(maxNumberOfBalloons("loonbalxballpoon")); // Output should be 2
console.log(maxNumberOfBalloons("leetcode")); // Output should be 0
console.log(maxNumberOfBalloons("balloonballoonballoon")); // Output should be 3
console.log(maxNumberOfBalloons("balon")); // Output should be 0
console.log(maxNumberOfBalloons("balloonballoon")); // Output should be 2
