/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const k = digits.length;
  const map = [
    // 映射表
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  if (!k) return [];
  if (k === 1) return map[digits].split(""); // 注意⭐️：digits是对应的数字

  let result = [];
  let path = [];

  const backtracking = (n, k, index) => {
    // index代表的是遍历digits中第几位
    if (path.length === k) {
      result.push(path.join(""));
      return;
    }

    for (let item of map[n[index]]) {
      path.push(item);
      backtracking(n, k, index + 1);
      path.pop();
    }
  };

  backtracking(digits, k, 0);
  return result;
};
