// 递归实现方式
function flatten(arr) {
  const n = arr.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i])); // 注意⭐️：res需要更新，即需要赋值操作
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

// reduce实现方式
function flatten1(arr) {
  // 注意⭐️：把结果return出去
  return arr.reduce((prev, cur) => {
    // 注意⭐️：把结果return出去
    return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}

var array = [1, [2, [3, 4]]];
console.log(flatten(array)); //[ 1, 2, 3, 4 ]
console.log(flatten1(array)); //[ 1, 2, 3, 4 ]
