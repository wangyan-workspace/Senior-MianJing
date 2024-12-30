/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  const n = tokens.length;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    switch (tokens[i]) {
      case "+":
        temp = stack.pop() + stack.pop();
        stack.push(temp);
        break;
      case "-":
        temp = stack.pop();
        temp = stack.pop() - temp;
        stack.push(temp);
        break;
      case "*":
        temp = stack.pop() * stack.pop();
        stack.push(temp);
        break;
      case "/":
        temp = stack.pop();
        // 要求：两个整数之间的除法总是 向零截断
        // Math.trunc()方法会将参数隐式转换成数字类型后，纯粹的去除小数部分
        temp = Math.trunc(stack.pop() / temp);
        stack.push(temp);
        break;
      default:
        stack.push(Number(tokens[i]));
        break;
    }
  }

  return stack.pop();
};
