const myNew = function(fn, ...rest) {
    // 1. 创建新对象
    const obj = {};
    // 2. 将新对象的隐式原型指向构造函数的显式原型
    obj.__proto__ = fn.prototype;
    // 3. 调用构造函数，并通过 apply 显示的绑定 this 指向
    const res = fn.apply(obj, rest);
    // 4. 判断构造函数是否有返回对象类型，没有直接返回新对象
    return res instanceof Object ? res : obj;
  }

// 测试
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.eat = function () {
  console.log("eat...");
};

const p1 = myNew(Person, 'Tom', 18);
p1.eat() // eat...
console.log(p1 instanceof Person);// true
console.log(p1.hasOwnProperty('name'));// true
console.log(p1.hasOwnProperty('age'));// true
