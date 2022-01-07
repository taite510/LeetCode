// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with the maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins that you can have.

var maxCoins = function(piles) {
  let coins = 0;
  piles = piles.sort((a, b) => b - a)
  for (let i = 0; i < piles.length / 3; i++) {
    coins += piles[2 * i + 1]
  }
  return coins
};


console.log(maxCoins([9,8,7,6,5,1,2,3,4]))