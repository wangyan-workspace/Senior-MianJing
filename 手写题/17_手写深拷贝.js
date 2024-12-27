function deepClone(source) {
  let target = source.constructor === Array ? [] : {};

  for (let key in source) {
    if (typeof source[key] === "object") {
      target[key] = deepClone(source[key]);
    } else {
      target[key] = source[key];
    }
  }

  return target;
}

let obj1 = {
  name: "Tom",
  age: 18,
  child: {
    name: "juery",
    age: 10,
  },
};

let obj4 = deepClone(obj1);
obj4.name = "Alice";
obj4.child.age = 14; // 不会导致obj1.child.age改变
console.log(obj1); // { name: 'Tom', age: 18, child: { name: 'juery', age: 10 } }
console.log(obj4); // { name: 'Alice', age: 18, child: { name: 'juery', age: 14 } }
