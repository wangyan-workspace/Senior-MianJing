/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i; // 注意⭐️：赋值hash[s[i]]
  }

  let result = [];
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash[s[i]]); // 注意⭐️：取值hash[s[i]]

    if (right === i) {
      result.push(right - left + 1);
      left = right + 1;
    }
  }

  return result;
};
