function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}

function deepClone(originValue, map = new WeakMap()) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) {
    return new Set([...originValue]);
  }
  // 判断是否为一个Map类型
  if (originValue instanceof Map) {
    return new Map([...originValue]);
  }
  // 判断如果是symbol的value，那么创建一个symbol
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description);
  }
  // 判断是一个函数，直接使用同一个函数
  if (typeof originValue === "function") {
    return originValue;
  }
  // 判断传入的originValue是否是一个对象类型,如果不是对象类型（例如： 字符串、数字）直接将值返回
  if (!isObject(originValue)) {
    return originValue;
  }
  if (map.has(originValue)) {
    return map.get(originValue);
  }

  // 判断传入的是数组还是对象
  const newObject = Array.isArray(originValue) ? [] : {};
  map.set(originValue, newObject);

  for (let key in originValue) {
    newObject[key] = deepClone(originValue[key], map);
  }

  // 对symbol的key进行特殊的处理
  // 通过 Object.getOwnPropertySymbols，可以获取对象的所有符号属性，从而在需要时访问或操作这些属性。
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  console.log("symbolKeys", symbolKeys); // [ Symbol(aaa) ]
  for (let sKey of symbolKeys) {
    newObject[sKey] = deepClone(originValue[sKey], map);
  }

  return newObject;
}

// 测试代码
let s1 = Symbol("aaa");
let s2 = Symbol("bbb");

const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "广州",
    },
  },
  // 数组类型
  hobbies: ["abc", "cba", "nba"],
  // 函数类型
  foo: function (m, n) {
    console.log("foo function");
    console.log("100代码逻辑");
    return 123;
  },
  // Symbol作为key和value
  [s1]: "abc",
  s2: s2,
  // Set/Map
  set: new Set(["aaa", "bbb", "ccc"]),
  map: new Map([
    ["aaa", "abc"],
    ["bbb", "cba"],
  ]),
};
obj.info = obj;

const newObj = deepClone(obj);
console.log(newObj === obj);

obj.friend.name = "kobe";
obj.friend.address.city = "成都";
console.log(newObj);
console.log(newObj.s2 === obj.s2);
console.log(newObj.info.info.info);
