/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let arr = new Array(26).fill(0);
  let base = "a".charCodeAt(); // 获取a的Unicode编码

  for (let item of magazine) {
    arr[item.charCodeAt() - base]++; // 将字母的Unicode编码减去a的Unicode编码，得到该字母在数组中的位置，并将该位置的值加1
  }

  for (let item of ransomNote) {
    let index = item.charCodeAt() - base; // 将字母的Unicode编码减去a的Unicode编码，得到该字母在数组中的位置
    if (!arr[index]) return false;
    arr[index]--;
  }
  return true;
};

// 使用map实现，跟有效的字母异位词的核心逻辑差不多
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();

  for (let item of magazine) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  for (let item of ransomNote) {
    if (!map.get(item)) {
      return false;
    }
    map.set(item, map.get(item) - 1);
  }

  return true;
};
