function myInstance(left, right) {
  let leftValue = left.__proto__;
  let rightValue = right.prototype;

  while (true) {
    if (leftValue === null) {
      return false;
    } else if (leftValue === rightValue) {
      // 注意✨：这里是判断相等的处理
      return true;
    } else {
      leftValue = leftValue.__proto__;
    }
  }
}
console.log({} instanceof Object); // true
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
console.log([] instanceof Number); // false

console.log(myInstance({}, Object)); // true
console.log(myInstance([], Array)); // true
console.log(myInstance([], Object)); // true
console.log(myInstance([], Number)); // false
