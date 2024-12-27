const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("参数格式错误,应为数组格式"));
    }
    // 空数组时直接返回 []
    if (promises.length === 0) {
      return resolve([]);
    }

    let res = [];
    let count = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          res[index] = data;
          count++;

          if (count === promises.length) {
            resolve(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
