const numberAdd = (number1, number2) => {
  let baseNumber1 = number1.toString().split(".")[1].length || 0; // 注意⭐️：split是字符串的方法，首先需要把数字转为字符串
  let baseNumber2 = number2.toString().split(".")[1].length || 0;
  let baseNumber = Math.pow(10, Math.max(baseNumber1, baseNumber2));

  let sum = (number1 * baseNumber + number2 * baseNumber) / baseNumber;
  return sum;
};

const numberAdd1 = (number1, number2) => {
    Number.EPSILON = Number.EPSILON ? Number.EPSILON : Math.pow(2, -52);
    return Math.abs(number1 - number2) < Number.EPSILON;
}

console.log(numberAdd(0.1, 0.2)); // 0.3
console.log(numberAdd(0.33, 5.2)); // 5.53
console.log(numberAdd(0.11111111111111, 0.2)); // 0.31111111111111

console.log(0.1 + 0.2, numberAdd1(0.1 + 0.2, 0.3)); // 0.30000000000000004 true


