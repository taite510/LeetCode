# Design a HashSet without using any built-in hash table libraries.

# Implement MyHashSet class:

# void add(key) Inserts the value key into the HashSet.
# bool contains(key) Returns whether the value key exists in the HashSet or not.
# void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

class MyHashSet:
    def eval_hash(self, key):
        return ((key*1726079) & (1 << 20) - 1) >> 5

    def __init__(self):
        self.arr = [[] for _ in range(1 << 15)]

    def add(self, key: int) -> None:
        i = self.eval_hash(key)
        if key not in self.arr[i]:
            self.arr[i].append(key)

    def remove(self, key: int) -> None:
        i = self.eval_hash(key)
        if key in self.arr[i]:
            self.arr[i].remove(key)

    def contains(self, key: int) -> bool:
        i = self.eval_hash(key)
        return key in self.arr[i]


obj = MyHashSet()
obj.add(1)
obj.add(2)
print(obj.contains(1) == True)
obj.remove(1)
print(obj.contains(1) == False)
