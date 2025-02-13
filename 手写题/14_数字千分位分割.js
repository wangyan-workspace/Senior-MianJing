function addThousandsSeparator(number) {
  let res = number.toString().trim(); // trim() 方法在这段代码中的意义在于确保输入字符串的格式是干净的，去除多余的空白字符，从而提高代码的准确性和健壮性
  let regex = /(?!^)(?=(\d{3})+$)/g;
  let sum = res.replace(regex, ",");
  return sum;
}

console.log(addThousandsSeparator(123344567890));
