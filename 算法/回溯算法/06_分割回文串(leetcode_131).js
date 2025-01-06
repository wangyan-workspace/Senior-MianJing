/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let path = [];
  const len = s.length;

  // 判断是否为回文串
  const isPalindrome = (s, left, right) => {
    for (let i = left, j = right; i < j; i++, j--) {
      if (s[i] !== s[j]) { // 注意⭐️：用i、j进行比较
        return false;
      }
    }
    return true;
  };

  const backtracking = (startIndex) => {
    if (startIndex >= len) {
      result.push(Array.from(path));
      return;
    }

    for (let i = startIndex; i < len; i++) {
      if (!isPalindrome(s, startIndex, i)) continue;
      path.push(s.slice(startIndex, i+1)); // 注意⭐️：slice方法是左闭右开，右边要定位到i+1
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return result;
};
