/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  let res = "";
  while (stack.length) {
    res = stack.pop() + res; // 注意⭐️：最后将栈中元素弹出，按顺序拼接为字符串，反转该字符串，字符串的拼接，每次拼接到字符串的前面，已实现字符串反转效果
  }
  return res;
};
