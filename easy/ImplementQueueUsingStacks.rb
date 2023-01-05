# Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

# Implement the MyQueue class:

# void push(int x) Pushes element x to the back of the queue.
# int pop() Removes the element from the front of the queue and returns it.
# int peek() Returns the element at the front of the queue.
# boolean empty() Returns true if the queue is empty, false otherwise.
# Notes:

# You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
# Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

class MyQueue
  def initialize()
      @stack = []
      @reverse = []
  end


=begin
  :type x: Integer
  :rtype: Void
=end
  def push(x)
      @stack.append(x)
  end


=begin
  :rtype: Integer
=end
  def pop()
    if @reverse.length == 0
      while @stack.length > 0
          @reverse.append(@stack.pop)
      end
    end
  return @reverse.pop
  end


=begin
  :rtype: Integer
=end
  def peek()
    if @reverse.length == 0
      while @stack.length > 0
          @reverse.append(@stack.pop)
      end
    end
    item = @reverse.pop
    @reverse.append(item)
    return item
  end


=begin
  :rtype: Boolean
=end
  def empty()
    if @reverse.length == 0 && @stack.length == 0
      return true
    end
  return false
  end


end


obj = MyQueue.new()
obj.push(1)
obj.push(2)
puts obj.pop() == 1
puts obj.peek() == 2
puts obj.empty() == false