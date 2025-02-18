function myInstance(left, right) {
  let leftValue = left.__proto__;
  let rightValue = right.prototype;

  while (true) {
    if (leftValue === null) {
      return false;
    } else if (leftValue === rightValue) {
      return true;
    } else {
      leftValue = leftValue.__proto__;
    }
  }
}
console.log({} instanceof Object); //true
console.log([] instanceof Array); //true
console.log([] instanceof Object); //true
console.log([] instanceof Number); //false

console.log(myInstance({}, Object));
console.log(myInstance([], Array));
console.log(myInstance([], Object));
console.log(myInstance([], Number));
