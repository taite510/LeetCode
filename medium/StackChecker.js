// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

const validateStackSequences = function(pushed, popped) {
  const stack = [];
  let i = 0;
  let j = 0;
  while (i <= pushed.length && j <= pushed.length) {
      if (stack[stack.length - 1] === popped[j]) {
          stack.pop();
          j++;
      } else {
          stack.push(pushed[i]);
          i++;
      }
  }
  return stack.length === 0;
};

console.log(validateStackSequences([1,2,3,4,5],[4,5,3,1,2]))