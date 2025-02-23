function arrange(name) {
  let task = [];

  task.push(() => {
    console.log(`${name} is notified`);
  });

  function wait(time) {
    // task.push(
    //   () =>
    //     new Promise((resolve) => {
    //       setTimeout(resolve, time * 1000);
    //     })
    // );
    // 如果有大括号包裹，记得return一下，上下两种方式表达是同一个意思
    task.push(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, time * 1000);
      });
    });
    return this; // return this 的主要作用是支持链式调用，使得多个方法可以连续调用而不需要中断。通过返回当前对象的引用，开发者可以更方便地构建复杂的操作序列。
  }

  function doSomething(taskName) {
    task.push(() => {
      console.log(`start to ${taskName}`);
    });
    return this;
  }

  function waitFirst(time) {
    // task.unshift(
    //   () =>
    //     new Promise((resolve) => {
    //       setTimeout(resolve, time * 1000);
    //     })
    // );
    // 如果有大括号包裹，记得return一下，上下两种方式表达是同一个意思
    task.unshift(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, time * 1000);
      });
    });
    return this;
  }

  async function execute() {
    for (let t of task) {
      await t();
    }
  }

  return {
    wait,
    do: doSomething,
    waitFirst,
    execute,
  };
}

arrange("William").wait(2).do("commit").waitFirst(1).execute();
