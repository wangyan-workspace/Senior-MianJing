const { getOptions } = require("webpack");
// const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");

const schema = require("../wy-schema/loader01-schema.json");

// NormalLoader
// 异步loader: this.async()
module.exports = function (content) {
  console.log(content, "哈哈哈，这是我的loader01");

  // 获取传入的参数:
  const options = getOptions(this);
  console.log("传入的参数是:", options);

  // 进行参数校验
  validate(schema, options, {
    name: "wy-loader02",
  });

  const callback = this.async();

  setTimeout(() => {
    callback(null, content);
  }, 2000);
};

// 同步loader
// module.exports = function (content) {
//   console.log(content, "哈哈哈，这是我的loader01");
//   // 同步loader，两种方法返回数据
//   // return content + 123;
//   this.callback(null, content);
// };

// PitchLoader
module.exports.pitch = function () {
  console.log("loader pitch 01");
};
