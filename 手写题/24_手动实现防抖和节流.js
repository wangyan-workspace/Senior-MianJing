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
