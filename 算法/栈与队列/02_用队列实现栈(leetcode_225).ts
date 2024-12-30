class MyStack {
  private queueIn: number[];
  private queueOut: number[];

  constructor() {
    this.queueIn = [];
    this.queueOut = [];
  }

  push(x: number): void {
    this.queueIn.push(x);
  }

  pop(): number {
    for (let i = 0, length = this.queueIn.length - 1; i < length; i++) {
      this.queueOut.push(this.queueIn.shift()!);
    }

    let res = this.queueIn.pop()!;

    [this.queueIn, this.queueOut] = [this.queueOut, this.queueIn];
    return res;
  }

  top(): number {
    const temp = this.pop();
    this.push(temp);
    return temp;
  }

  empty(): boolean {
    return this.queueIn.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

for (let i = 0, length = this.queueIn.length - 1; i < length; i++) {}
/**
 * 定义: 在循环的初始化部分，length 变量被定义为 this.queueIn.length - 1 的值。
 * 作用范围: 这个 length 变量是块级作用域的（因为使用了 let），它的值在整个循环体内保持不变。
 * 影响: 在循环开始时，length 的值是固定的，不会因为 this.queueIn.length 的变化而改变。
 *      因此，如果在循环体内对 this.queueIn 进行了修改（例如添加或删除元素），
 *      length 的值不会受到影响，循环的条件判断仍然基于初始的 length 值。
 */
for (let i = 0; i < this.queueIn.length - 1; i++) {}
/**
 * 定义: 在每次循环迭代时，this.queueIn.length - 1 会被重新计算。
 * 作用范围: 这里没有定义 length 变量，而是直接在循环条件中使用 this.queueIn.length - 1。
 * 影响: 如果在循环体内对 this.queueIn 进行了修改（例如添加或删除元素），
 *      this.queueIn.length 的值会在每次迭代时被重新计算。
 *      因此，循环的条件会根据 this.queueIn 的当前长度动态变化。
 */
