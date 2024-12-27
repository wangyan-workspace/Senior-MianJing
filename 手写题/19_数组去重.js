// indexOf&forEach方式
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("参数错误");
    return;
  }

  let res = [];

  arr.forEach((item) => {
    if (res.indexOf(item) === -1) {
      res.push(item);
    }
  });

  return res;
}

// indexOf&filter方式
function unique1(arr) {
  if (!Array.isArray(arr)) {
    console.log("参数错误");
    return;
  }

  // 注意⭐️：把结果return出去
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index; // 注意⭐️：检测元素在数组中第一次出现的位置是否和元素现在的位置相等,都是对同一个数组的操作
  });
}

const arr = [1, 1, 2, 2, 33, 33, 2, 5, 4];
console.log(unique(arr)); // [1, 2, 33, 5, 4]
console.log(unique1(arr)); // [1, 2, 33, 5, 4]
