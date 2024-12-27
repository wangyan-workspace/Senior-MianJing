/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let charCount = new Map();

  for (let item of s) {
    charCount.set(item, (charCount.get(item) || 0) + 1);
  }

  for (let item of t) {
    if (!charCount.get(item)) return false;
    charCount.set(item, charCount.get(item) - 1);
  }

  return true;
};
