// 防抖
function debounce(fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 节流
function throttle(fn, interval) {
  let startTime = 0;

  return function (...args) {
    let nowTime = new Date().getTime();
    let remainTime = interval - (nowTime - startTime);
    if (remainTime <= 0) {
      fn.apply(this, args);
      startTime = nowTime;
    }
  };
}

function printMessage() {
  console.log("Function executed!");
}

// 验证函数
// 创建防抖函数，设置等待时间为500毫秒
const debouncedPrint = debounce(printMessage, 500);

// 连续调用3次
debouncedPrint();
debouncedPrint();
debouncedPrint();


// 创建节流函数，设置等待时间为500毫秒
const throttledPrint = throttle(printMessage, 500);
throttledPrint();
throttledPrint();
throttledPrint();