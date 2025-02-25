function mock(index) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${index} 完成`);
      resolve();
    }, Math.random() * 1000);
  });
}

mock("A")
  .then(() => mock("B"))
  .then(() => mock("C"))
  .then(() => {
    console.log("所有任务完成");
  })
  .catch((error) => {
    console.error("出错:", error);
  });
