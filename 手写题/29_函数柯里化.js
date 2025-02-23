function curry(fn) {
    if(typeof fn !== "function") {
        throw new Error(`${fn} is not a function`);
    }

    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...newArgs) {
                return curried.apply(this, args.concat(newArgs));
            }
        }
    }
}

// 示例使用
function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1)(2)(3)); // 输出 6
  console.log(curriedAdd(1, 2)(3)); // 输出 6
  console.log(curriedAdd(1, 2, 3)); // 输出 6