function add(n1) {
  let sum = n1;

  function fn(n2) {
    if (!n2) {
      return sum;
    }

    sum += n2;
    return fn;
  }

  return fn;
}

console.log(add(1)()); // 输出 1
console.log(add(1)(2)(3)(4)()); // 输出 10
console.log(add(1)(2)(3)()); // 输出 6
console.log(add(1)(22)(13)(54)()); // 输出 90
