// 二维数组的01背包
var backpackTwo = (bagWeight, weight, value) => {
  let n = weight.length;
  let dp = new Array(n).fill().map(() => new Array(bagWeight + 1).fill(0));

  //初始化,物品0放入背包中，背包容量为j（1~bagweight）所能达到的最大价值
  for (let j = weight[0]; j <= bagWeight; j++) {
    dp[0][j] = value[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= bagWeight; j++) {
      if (weight[i] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }

  return dp[n - 1][bagWeight];
};

const value = backpackTwo(4, [1, 3, 4], [15, 20, 30]);
console.log("value", value);

// 一维数组的01背包
var backpackOne = (bagWeight, weight, value) => {
  let dp = new Array(bagWeight + 1).fill(0);

  for (let i = 0; i < weight.length; i++) {
    for (let j = bagWeight; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }

  return dp[bagWeight];
};

const valueOne = backpackOne(1, [2,2,3,1,5,2], [2,3,1,5,4,3]);
console.log("valueOne", valueOne);
