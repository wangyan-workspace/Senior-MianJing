/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = 0;
  let total = 0;

  for (let item of s) {
    if (item === "R") {
      total += 1;
    } else {
      total -= 1;
    }

    if (total === 0) {
      result++;
    }
  }

  return result;
};
