// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.
const searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((high - low - 1) / 2) + low;
    if (nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  if (nums[low] === target) {
    return low;
  } else {
    if (nums[low] < target) {
      return low + 1
    } else {
      return low
    }
  }
};

const lastStoneWeight = function(stones) {
  stones.sort((a,b) => a - b)
  let i = stones.length - 1
  while (stones.length > 1) {
    if (stones[i] > stones[i - 1]) {
      stones[i - 1] = stones.pop() - stones[i - 1]
      i--
      if (stones[i] < stones[i - 1]) {
        let num = stones.pop()
        stones.splice(searchInsert(stones, num), 0, num);
      }
    } else {
      stones.pop()
      stones.pop()
      i -= 2
    }
  }
  return stones.length === 0 ? 0 : stones[0]
};

console.log(lastStoneWeight([2,7,4,1,8,1,29]))