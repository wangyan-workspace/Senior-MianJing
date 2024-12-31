/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i = 0;
  let j = 0;
  let m = name.length;
  let n = typed.length;

  while (i < m && j < n) {
    if (name[i] === typed[j]) {
      i++;
      j++;
    } else {
      if (j === 0) return false; // 如果是第一位就不相同直接返回false

      // 判断边界为n-1,若为n会越界,例如name:"kikcxmvzi" typed:"kiikcxxmmvvzzz"
      while (j < n - 1 && typed[j] === typed[j - 1]) {
        j++;
      }
      // j跨越重复项之后再次和name[i]匹配,相同则同时向后匹配
      if (name[i] === typed[j]) {
        i++;
        j++;
      } else {
        // 如果不相同则返回false
        return false;
      }
    }
  }

  // 说明name没有匹配完
  if (i < m) {
    return false;
  }

  while (j < n) {
    // typed没有匹配完,判断是否是重复项
    if (typed[j] === typed[j - 1]) {
      j++;
    } else {
      // 不是重复项则返回false
      return false;
    }
  }

  return true;
};
