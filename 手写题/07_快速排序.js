function quickSort(arr) {
  function partition(left, right) {
    if (left >= right) return; // 注意🌟：终止条件
    let pivotVale = right;
    let i = left;
    let j = right - 1;

    while (i <= j) {
      while (arr[i] < arr[pivotVale]) { // 记得while循环，才能继续往后走
        i++;
      }
      while (arr[j] > arr[pivotVale]) {
        j--;
      }

      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    [arr[i], arr[pivotVale]] = [arr[pivotVale], arr[i]];

    partition(left, j);
    partition(i + 1, right);
  }

  partition(0, arr.length - 1);
  return arr;
}

const nums = [18, 88, 65, 45, 27, 9, 15];
console.log(quickSort(nums));
