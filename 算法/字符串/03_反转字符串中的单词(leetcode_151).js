/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let strArr = Array.from(s);
  removeExtraSpaces(strArr);
  reverse(strArr, 0, strArr.length - 1);

  // 单词反转
  let start = 0;
  for (let i = 0; i <= strArr.length; i++) {
    // 注意⭐️：遍历到索引为数组长度的位置，因为反转单词的end为 i - 1
    if (strArr[i] === " " || i === strArr.length) {
      reverse(strArr, start, i - 1);
      start = i + 1; // 注意⭐️：start的更新在单词反转之后，更新逻辑在反转单词逻辑里
    }
  }

  return strArr.join(""); // 注意⭐️：结果及时返回
};

// 删除多余空格
function removeExtraSpaces(strArr) {
  let fast = 0;
  let slow = 0;

  // 去除前面、中间的空格
  while (fast < strArr.length) {
    if (strArr[fast] === " " && (fast === 0 || strArr[fast - 1] === " ")) {
      fast++;
    } else {
      strArr[slow++] = strArr[fast++];
    }
  }

  // 去除后面的空格
  strArr.length = strArr[slow - 1] === " " ? slow - 1 : slow;
}

// 将字符串反转
function reverse(strArr, start, end) {
  let left = start;
  let right = end;

  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}
