// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

const numberOfPairs = function (nums) {
  const numFreqs = {}
  let pairs = leftovers = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    numFreqs[num] ? numFreqs[num]++ : numFreqs[num] = 1
  }
  for (let num in numFreqs) {
    let freq = numFreqs[num]
    if (freq % 2 !== 0) {
      leftovers += 1
      freq -= 1
    }
    pairs += freq / 2
  }
  return [pairs, leftovers]
};


const ans = numberOfPairs([1, 3, 2, 1, 3, 2, 2])
console.log(ans[0] === 3)
console.log(ans[1] === 1)