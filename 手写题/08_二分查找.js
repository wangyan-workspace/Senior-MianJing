function findIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let res = -1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1); // 这个中间节点的计算依赖left、right，要放到循环里面
    if (target === arr[mid]) {
      res = mid;
      right = mid - 1; // 继续在左侧查找第一次出现的位置
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
}

console.log(findIndex([1, 2, 2, 3, 4, 5, 5, 5, 6, 7], 2));
