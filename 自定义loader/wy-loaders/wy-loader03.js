module.exports = function (content) {
  console.log(content, "哈哈哈，这是我的loader03");
  return content + 123;
};

module.exports.pitch = function () {
  console.log("loader pitch 03");
};
