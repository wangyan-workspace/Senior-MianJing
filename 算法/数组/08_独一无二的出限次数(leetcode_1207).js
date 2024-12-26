/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();

  arr.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  return map.size === new Set(map.values()).size;
};
