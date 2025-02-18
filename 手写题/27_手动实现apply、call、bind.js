// 手动实现apply
Function.prototype.myApply = function (context, args) {
  if (context === undefined || context === null) {
    context = window;
  } else {
    context = Object(context);
  }

  let specialSymbol = Symbol("特殊属性Symbol");
  context[specialSymbol] = this;
  let result = context[specialSymbol](...args);
  delete context[specialSymbol];
  return result;
};

// 手动实现call
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  let specialSymbol = Symbol("特殊属性Symbol");
  context[specialSymbol] = this;
  let result = context[specialSymbol](...args);
  delete context[specialSymbol];
  return result;
};

// 手动实现bind
Function.prototype.myBind = function (context, ...args) {
  let fn = this;

  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

// 测试
function greet(greeting, punctuation) {
  console.log(greeting);
  console.log(this.name);
  console.log(punctuation);
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = {
  name: "Alice",
};
greet("aa", "bb"); // 输出: aa, undefinedbb
// 使用 myApply
greet.myApply(person, ["Hello", "!"]); // 输出: Hello, Alice!

// 使用 myCall
greet.myCall(person, "Hi", "?"); // 输出: Hi, Alice?

// 使用 myBind 创建一个新的函数
const greetAlice = greet.myBind(person, "Hello");
// 调用新函数
greetAlice("!"); // 输出: Hello, Alice!
