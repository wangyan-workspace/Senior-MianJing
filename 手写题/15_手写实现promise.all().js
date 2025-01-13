const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      // 注意⭐️：判断的是非数组的情况
      return reject(new Error("格式错误")); // 注意⭐️：错误返回使用reject
    }

    if (promises.length === 0) {
      return resolve([]);
    }

    let res = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          console.log("data", data);
          res[index] = data;
          count++;

          if (count === promises.length) {
            return resolve(res);
          }
        })
        .catch((err) => {
          return reject(err); // 注意⭐️：错误返回使用reject
        });
    });
  });
};

// 测试
const asyncOpera = (id, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`操作${id}完成`);
    }, delay);
  });
};

const promises = [
  asyncOpera(3, 3000),
  "gvbhjnkml;,",
  // Promise.reject("失败了"),
  asyncOpera(1, 1000),
];

promiseAll(promises).then((res) => {
  console.log("promiseAll res", res); // promiseAll res [ '操作3完成', 'gvbhjnkml;,', '操作1完成' ]
});
