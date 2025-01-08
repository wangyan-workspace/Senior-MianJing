/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// 逻辑上是正确的，处理数据量极大的情况下会超出时间限制
var findItinerary = function (tickets) {
  let result = ["JFK"];
  let map = {};

  for (let ticket of tickets) {
    const [from, to] = ticket;

    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }

  // for...in 用于遍历对象的属性名，适合对象。
  // for...of 用于遍历可迭代对象的元素值，适合数组和其他可迭代的数据结构。
  for (let city in map) {
    map[city].sort();
  }

  const backtracking = () => {
    if (result.length === tickets.length + 1) {
      return true;
    }

    if (
      !map[result[result.length - 1]] ||
      !map[result[result.length - 1]].length
    ) {
      return false;
    }

    for (let i = 0; i < map[result[result.length - 1]].length; i++) {
      let city = map[result[result.length - 1]][i];

      // 如果先执行 splice，移除目的地后再 push，可以确保在当前的回溯路径中不会再次使用这个目的地。这是非常重要的，因为我们需要确保每张机票只能使用一次。
      // 如果先 push，再 splice，那么在 result 中已经包含了新添加的城市，但目的地列表中仍然保留了这个城市。这会导致在后续的回溯中，可能会再次选择这个城市，从而导致路径不合法，甚至可能导致无限循环或错误的结果。
      // 在回溯算法中，操作的顺序非常关键。确保在添加新元素之前移除不再需要的元素，可以避免重复使用和不必要的计算，从而提高算法的效率。
      map[result[result.length - 1]].splice(i, 1);
      result.push(city);
      if (backtracking()) {
        return true;
      }
      result.pop();
      map[result[result.length - 1]].splice(i, 0, city);
    }
  };

  backtracking();
  return result;
};
