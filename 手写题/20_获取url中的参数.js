function getUrlParams(sUrl, sKey) {
  const sParam = sUrl.split("?")[1].split("#")[0];
  const arr = sParam.split("&");
  const n = arr.length;
  let res;

  // 如果指定sKey参数名
  if (sKey) {
    res = [];

    for (let i = 0; i < n; i++) {
      let temp = arr[i].split("=");
      if (temp[0] === sKey) {
        res.push(temp[1]);
      }
    }

    if (res.length === 1) {
      return res[0];
    } else if (res.length === 0) {
      return "";
    } else {
      return res;
    }
  } else {
    // 如果不指定参数名称
    res = {};
    if (sParam == undefined || sParam == "") {
      return res;
    }

    for (let i = 0; i < n; i++) {
      let temp = arr[i].split("=");
      if (!(temp[0] in res)) {
        res[temp[0]] = [];
      }
      res[temp[0]].push(temp[1]);
    }

    return res;
  }
}

console.log(getUrlParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key'));
console.log(getUrlParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'));
