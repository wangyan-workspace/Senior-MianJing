function lengthOfLIS(numbers) {
  let dp = new Array(numbers.length).fill(1);
  let result = 1;

  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    result = Math.max(result, dp[i]);
  }

  return result;
}

console.log(lengthOfLIS([0, 3, 1, 6, 2, 2, 7]));
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS( [0,1,0,3,2,3]));
console.log(lengthOfLIS( [[7,7,7,7,7,7,7]]));
