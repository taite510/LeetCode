# Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

# Implement the MyQueue class:

# void push(int x) Pushes element x to the back of the queue.
# int pop() Removes the element from the front of the queue and returns it.
# int peek() Returns the element at the front of the queue.
# boolean empty() Returns true if the queue is empty, false otherwise.
# Notes:

# You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
# Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

class MyQueue:

    def __init__(self):
        self.stack = []
        self.reverse = []

    def push(self, x: int) -> None:
        self.stack.append(x)

    def pop(self) -> int:
        if not self.reverse:
            while self.stack:
                self.reverse.append(self.stack.pop())
        return self.reverse.pop()

    def peek(self) -> int:
        if not self.reverse:
            while self.stack:
                self.reverse.append(self.stack.pop())
        return self.reverse[-1]

    def empty(self) -> bool:
        return not self.stack and not self.reverse


obj = MyQueue()
obj.push(1)
obj.push(2)
print(obj.pop() == 1)
print(obj.peek() == 2)
print(obj.empty() == False)
print(obj.pop() == 2)
print(obj.empty() == True)
