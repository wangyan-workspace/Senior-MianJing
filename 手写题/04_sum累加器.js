function sum(...rest) {
  let sum = rest.reduce((cur, val) => cur + val, 0);

  function fn(...nextRest) {
    sum += nextRest.reduce((cur, val) => cur + val, 0);
    return fn;
  }

  fn.sumOf = () => {
    return sum;
  };

  return fn;
}

console.log(sum(1, 2).sumOf()); // 返回 3
console.log(sum(1, 2)(3).sumOf()); // 返回 6
console.log(sum(1)(2, 3, 4).sumOf()); // 返回 10
console.log(sum(1, 2)(3, 4)(5).sumOf()); // 返回 15
