/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  class MonoQueue {
    constructor() {
      this.queue = [];
    }

    enqueue(value) {
      let back = this.queue[this.queue.length - 1];

      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }

    dequeue(value) {
      let top = this.top();
      if (top !== undefined && top === value) {
        this.queue.shift();
      }
    }

    top() {
      return this.queue[0];
    }
  }

  const helpQueue = new MonoQueue();

  let i = 0;
  let j = 0;
  let resArr = [];

  while (j < k) {
    helpQueue.enqueue(nums[j]);
    j++;
  }

  resArr.push(helpQueue.top());

  while (j < nums.length) {
    helpQueue.enqueue(nums[j]);
    helpQueue.dequeue(nums[i]);
    resArr.push(helpQueue.top());
    j++;
    i++;
  }

  return resArr;
};
