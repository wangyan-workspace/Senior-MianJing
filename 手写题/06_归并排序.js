function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  let newLeftArr = mergeSort(leftArr);
  let newRightArr = mergeSort(rightArr);

  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] < newRightArr[j]) {
      newArr.push(newLeftArr[i]);
      i++;
    } else {
      newArr.push(newRightArr[j]);
      j++;
    }
  }

  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i));
  }

  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j));
  }

  return newArr;
}

const nums = [18, 88, 65, 45, 27, 9, 15];
console.log(mergeSort(nums));