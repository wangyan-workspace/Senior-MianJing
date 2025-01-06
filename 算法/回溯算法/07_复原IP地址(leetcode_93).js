/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];
  let path = [];

  const backtracking = (startIndex) => {
    let len = path.length;

    if (len > 4) return;
    if (len === 4 && startIndex === s.length) {
      result.push(path.join("."));
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      let str = s.slice(startIndex, i + 1); // 注意⭐️：slice方法是左闭右开，右边要定位到i+1

      if (str.length > 3 || +str > 255) break;
      if (str.length > 1 && str[0] === "0") break;

      path.push(str);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return result;
};
