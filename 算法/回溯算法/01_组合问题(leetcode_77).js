/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let path = [];

  const backtracking = (_n, _k, startIndex) => {
    if (path.length === _k) {
      result.push(path.slice());
      return;
    }

    for (let i = startIndex; i <= _n - (_k - path.length) + 1; i++) {
      path.push(i);
      backtracking(_n, _k, i + 1);
      path.pop();
    }
  };

  backtracking(n, k, 1);
  return result;
};
