/*
 * @Author: wangyan-workspace 2107014530@qq.com
 * @Date: 2025-03-01 16:19:20
 * @LastEditors: wangyan-workspace 2107014530@qq.com
 * @LastEditTime: 2025-03-01 17:07:15
 * @FilePath: /Senior-MianJing/手写题/32_手动实现事件总线(eventBus).js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class WYEventBus {
  constructor() {
    // eventBus 对象用于存储所有的事件监听器
    // 格式: {
    //   "eventName1": [callback1, callback2],
    //   "eventName2": [callback1, callback2]
    // }
    this.eventBus = {};
  }

  // 订阅事件方法
  // @param eventName: string - 事件名称
  // @param eventCallback: function - 事件回调函数
  on(eventName, eventCallback) {
    // 1. 获取当前事件的处理函数数组
    let handlers = this.eventBus[eventName];

    // 2. 如果是首次订阅该事件，初始化空数组
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }

    // 3. 将回调函数添加到处理函数数组
    handlers.push(eventCallback);
  }

  // 发布事件方法
  // @param eventName: string - 事件名称
  // @param args: any[] - 传递给回调函数的参数列表
  emit(eventName, ...args) {
    // 1. 获取该事件的所有处理函数
    const handlers = this.eventBus[eventName];

    // 2. 如果没有订阅者，直接返回
    if (!handlers) return;

    // 3. 依次调用所有处理函数，并传入参数
    handlers.forEach((handler) => {
      handler(...args);
    });
  }

  // 取消订阅方法
  // @param eventName: string - 事件名称
  // @param eventCallback: function - 要取消的具体回调函数
  off(eventName, eventCallback) {
    // 1. 获取该事件的所有处理函数
    const handlers = this.eventBus[eventName];
    if (!handlers) return;

    // 2. 使用 filter 过滤掉要取消的回调函数
    this.eventBus[eventName] = handlers.filter(
      (handler) => handler !== eventCallback
    );
  }

  // 一次性订阅事件方法
  // @param eventName: string - 事件名称
  // @param eventCallback: function - 事件回调函数
  once(eventName, eventCallback) {
    // 1. 创建包装函数，执行完后自动取消订阅
    const wrapper = (...args) => {
      // 1.1 执行原始回调
      eventCallback(...args);
      // 1.2 执行完后立即取消订阅
      this.off(eventName, wrapper);
    };

    // 2. 使用包装函数进行订阅
    this.on(eventName, wrapper);
  }

  // 清除所有事件监听
  clear() {
    // 直接重置事件总线对象
    this.eventBus = {};
  }

  // 清除指定事件的所有监听
  // @param eventName: string - 要清除的事件名称
  clearEvent(eventName) {
    if (eventName) {
      // 删除指定事件的所有监听器
      delete this.eventBus[eventName];
    }
  }
}

// 取消订阅事件——这种方法实现也是可以的
//   off(eventName, eventCallback) {
//     const handlers = this.eventBus[eventName];
//     if (!handlers) return;

//     const newHandlers = [...handlers];
//     for (let i = 0; i < newHandlers.length; i++) {
//       const handler = newHandlers[i];
//       if (handler === eventCallback) {
//         const index = handlers.indexOf(handler);
//         handlers.splice(index, 1);
//       }
//     }
//   }

// 创建事件总线实例
const eventBus = new WYEventBus();

// 示例1：基础订阅和发布
eventBus.on("userLogin", (user) => {
  console.log(`用户 ${user.name} 登录了`);
});

// 执行流程：
// 1. eventBus.eventBus["userLogin"] = [callback1]
// 2. emit 触发时，遍历执行数组中的所有回调
eventBus.emit("userLogin", { name: "张三" });

// 示例2：多次订阅同一事件
const callback1 = () => console.log("回调1");
const callback2 = () => console.log("回调2");

eventBus.on("test", callback1);
eventBus.on("test", callback2);
// 此时 eventBus.eventBus["test"] = [callback1, callback2]

// 示例3：取消特定订阅
eventBus.off("test", callback1);
// 执行后 eventBus.eventBus["test"] = [callback2]

// 示例4：一次性订阅
eventBus.once("notification", (msg) => {
  console.log(`收到通知: ${msg}`);
});

// 第一次触发会执行
eventBus.emit("notification", "你有新消息");
// 第二次触发不会执行（因为已经自动取消订阅）
eventBus.emit("notification", "又有新消息");

eventBus.clear();
eventBus.clearEvent("test");
