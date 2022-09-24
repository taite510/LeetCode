// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

var MyQueue = function() {
  this.stack = [];
  this.reverse = [];
};

MyQueue.prototype.push = function(x) {
  this.stack.push(x)
};

MyQueue.prototype.pop = function() {
  if (this.reverse.length === 0) {
      while (this.stack.length > 0) {
          this.reverse.push(this.stack.pop())
      }
  }
  return this.reverse.pop()
};

MyQueue.prototype.peek = function() {
  if (this.reverse.length === 0) {
      while (this.stack.length > 0) {
          this.reverse.push(this.stack.pop())
      }
  }
  let item = this.reverse.pop()
  this.reverse.push(item)
  return item
};

MyQueue.prototype.empty = function() {
  if (this.reverse.length === 0 && this.stack.length === 0) {
      return true
  }
  return false
};

const queue = new MyQueue();
queue.push(1)
queue.push(2)
console.log(queue.pop() === 1)
console.log(queue.peek() === 2)
queue.push(3)
console.log(queue.pop() === 2)
console.log(queue.empty() === false)
console.log(queue.pop() === 3)
console.log(queue.empty() === true)