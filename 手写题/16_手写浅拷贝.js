function clone(source) {
  let target = source.constructor === Array ? [] : {};

  for (let key in source) {
    target[key] = source[key];
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

let obj3 = clone(obj1);
obj3.name = "Alice";
obj3.child.age = 12; // 会导致obj1.child.age也改变
console.log(obj1); // { name: 'Tom', age: 18, child: { name: 'juery', age: 12 } }
console.log(obj3); // { name: 'Alice', age: 18, child: { name: 'juery', age: 12 } }
