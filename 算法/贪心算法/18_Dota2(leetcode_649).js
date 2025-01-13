/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let R = true;
  let D = true;
  let flag = 0;
  let senateArr = senate.split(""); // 将字符串转换为数组，方便操作

  while (R && D) {
    R = false;
    D = false;

    for (let i = 0; i < senateArr.length; i++) {
      if (senateArr[i] === "R") {
        if (flag < 0) {
          senateArr[i] = 0;
        } else {
          R = true;
        }
        flag++;
      }

      if (senateArr[i] === "D") {
        if (flag > 0) {
          senateArr[i] = 0;
        } else {
          D = true;
        }
        flag--;
      }
    }
  }

  return R ? "Radiant" : "Dire";
};
