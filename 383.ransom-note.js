/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const getDict = (str) => {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  return map;
};
var canConstruct = function (ransomNote, magazine) {
  let map1 = getDict(ransomNote);
  let map2 = getDict(magazine);
  for (let [key, value] of map1) {
    if (map2.get(key) >= value) {
      return false;
    }
  }
  return true;
};
console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
);
