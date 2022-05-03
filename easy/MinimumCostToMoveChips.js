// We have n chips, where the position of the ith chip is position[i].

// We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

// position[i] + 2 or position[i] - 2 with cost = 0.
// position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.

const minCostToMoveChips = function(position) {
  let [odd, even] = [0,0];
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return Math.min(odd, even);
};

console.log(minCostToMoveChips([1,1000000000]))