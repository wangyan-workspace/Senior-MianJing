/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [];
  let size = 26;
  let firstWord = words[0];
  let firstArr = new Array(size).fill(0);
  const base = "a".charCodeAt();

  for (let key of firstWord) {
    let index = key.charCodeAt() - base;
    firstArr[index]++;
  }

  let otherArr = new Array(size).fill(0);

  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let index = words[i][j].charCodeAt() - base;
      otherArr[index]++;
    }

    // 注意⭐️：第一个字母与其他字母比较，要在字母数组的循环里
    for (let i = 0; i < size; i++) {
      firstArr[i] = Math.min(firstArr[i], otherArr[i]);
    }
    // 及时清空otherArr
    otherArr.fill(0);
  }

  for (let i = 0; i < size; i++) {
    while (firstArr[i] > 0) {
      // 注意⭐️：相同字母可能出现多次，需要循环添加字母到结果数组
      result.push(String.fromCharCode(i + base));
      firstArr[i]--; // 注意⭐️：每添加一个字母，当前的字母次数要减1
    }
  }

  return result;
};
