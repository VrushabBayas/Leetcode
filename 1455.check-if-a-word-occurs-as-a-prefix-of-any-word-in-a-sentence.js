/*
 * @lc app=leetcode id=1455 lang=javascript
 *
 * [1455] Check If a Word Occurs As a Prefix of Any Word in a Sentence
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let str = sentence.split(" ");

  let i = 0;
  for (let j = 0; j < str.length; j++) {
    let word = str[j];
    for (i = 0; i < searchWord.length; i++) {
      if (searchWord[i] !== word[i]) {
        break;
      }
    }
    if (i === searchWord.length) {
      return j;
    }
  }
};
isPrefixOfWord("i love eating burger", "burg");
// @lc code=end
