function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function executeTask() {
  console.log("Task started");
  await sleep(5000);
  console.log("Task resumed after 5 seconds");
}

executeTask();
