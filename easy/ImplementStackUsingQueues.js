// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

const MyStack = function () {
  this.queue = []
};

MyStack.prototype.push = function (x) {
  this.queue.push(x)
};

MyStack.prototype.pop = function () {
  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift())
  }
  return this.queue.shift()

};

MyStack.prototype.top = function () {
  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift())
  }
  const res = this.queue.shift()
  this.queue.push(res)
  return res
};

MyStack.prototype.empty = function () {
  if (this.queue.length) {
    return false
  }
  return true
};

const obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
const param_2 = obj.pop()
console.log(param_2 === 3)
const param_3 = obj.top()
console.log(param_3 === 2)
const param_4 = obj.empty()
console.log(param_4 === false)