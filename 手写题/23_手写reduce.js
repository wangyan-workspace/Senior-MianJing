function myReduce(callback, preValue) {
  if (typeof callback !== "function") {
    throw new Error(`${callback} is not function!!!`);
  }

  let index = 0;
  let len = this.length;

  if (preValue === undefined || preValue === null) {
    index = 1;
    preValue = this[0];
  }

  for (; index < len; index++) {
    preValue = callback(preValue, this[index], index, this); // 注意⭐️：更新preValue的值
  }

  return preValue;
}

Array.prototype.myReduce = myReduce; // 注意⭐️：绑定到原型上，否则直接调用，是获取不到的

const arr = [1, 2, 3, 4, 5, 6];
console.log(
  "my reduce 1:",
  arr.myReduce((a, b) => a + b)
); // 21
console.log(
  "my reduce 2:",
  arr.myReduce((a, b) => a + b, "")
); // 123456

// 数组本身的reduce
console.log(
  "Array.prototype.reduce 1:",
  arr.reduce((a, b) => a + b)
);
console.log(
  "Array.prototype.reduce 2:",
  arr.reduce((a, b) => a + b, "")
);
