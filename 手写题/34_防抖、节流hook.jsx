import React, { useEffect, useCallback, useRef } from "react";

export default function useDebounce(fn, delay = 1000, dep = []) {
  const { current } = useRef({ fn, timer: null });

  useEffect(() => {
    current.fn = fn;
  }, [fn]); // 当 fn 变化时更新 current.fn

  useEffect(() => {
    return () => {
      clearTimeout(current.timer);
    };
  }, []); // 组件卸载时清除定时器

  return useCallback(
    function (...args) {
      if (current.timer) {
        clearTimeout(current.timer);
      }
      current.timer = setTimeout(() => {
        current.fn(...args); // 移除 this
      }, delay);
    },
    [...dep, delay] // 将 dep 展开，并加入 delay 作为依赖
  );
}


import { useRef, useCallback } from "react";

export default function useThrottle(fn, interval = 1000) {
  const startTimeRef = useRef(0); // 存储上一次执行的时间戳

  return useCallback(
    function (...args) {
      const nowTime = Date.now();
      const remainTime = interval - (nowTime - startTimeRef.current);

      if (remainTime <= 0) {
        fn(...args); // 执行函数
        startTimeRef.current = nowTime; // 更新上一次执行的时间
      }
    },
    [fn, interval] // 依赖项：fn 和 interval
  );
}