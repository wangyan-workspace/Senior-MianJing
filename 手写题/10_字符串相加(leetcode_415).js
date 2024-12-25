/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = ""; // 用于存储最终的结果字符串
  const len = Math.max(num1.length, num2.length); // 计算两个字符串的最大长度，以便进行逐位相加
  // 使用 padStart 方法将较短的字符串前面填充零，使得两个字符串长度相同。这是为了方便逐位相加
  const handleNum1 = num1.padStart(len, "0");
  const handleNum2 = num2.padStart(len, "0");
  let temp = 0; // 用于存储进位的值，初始为0

  for (let i = len - 1; i >= 0; i--) {
    // 从字符串的最后一位开始逐位相加，直到第一位
    let sum = +handleNum1[i] + +handleNum2[i] + temp; // 计算当前位的和，包括进位 temp,注意⭐️⭐️⭐️：handleNum1[i]合handleNum2[i]前面要加上“+”号，否则会变成字符串的拼接
    temp = Math.floor(sum / 10); // 更新进位，使用 Math.floor(sum / 10) 计算当前位的进位
    let targetSum = sum % 10; // 当前位的结果，使用 sum % 10 计算
    res = targetSum + res; // 将当前位的结果添加到结果字符串的前面,由于res是字符串类型，相加，其实是字符串的拼接
  }

  // 注意⭐️⭐️⭐️: 处理最后的进位,别忘了
  // 如果在最后一位相加后还有进位（即 temp 不为 0），则在结果字符串的最前面添加 1
  if (temp) {
    res = "1" + res;
  }

  return res;
};

console.log(addStrings("456", "77"));
