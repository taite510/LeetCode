// You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].

// The following are the types of poker hands you can make from best to worst:

// "Flush": Five cards of the same suit.
// "Three of a Kind": Three cards of the same rank.
// "Pair": Two cards of the same rank.
// "High Card": Any single card.
// Return a string representing the best type of poker hand you can make with the given cards.

// Note that the return values are case-sensitive.

var bestHand = function(ranks, suits) {
  let flush = true
  let numMatch = 1
  let curr = 1
  const sortedRanks = ranks.sort((a,b) => a - b);
  for (let i = 1; i < 5; i++) {
      if (suits[i] !== suits[i - 1]) {
          flush = false;
      }
      if (sortedRanks[i] === sortedRanks[i - 1]) {
          curr++
      } else {
          if (curr > numMatch) {
              numMatch = curr
          }
          curr = 1
      }
  }
  if (curr > numMatch) {
      numMatch = curr
  }
  return flush ? 'Flush' : numMatch > 2 ? 'Three of a Kind' : numMatch === 2 ? 'Pair' : 'High Card'
};

console.log(bestHand([13,2,3,1,9], ["a","a","a","a","a"]) === 'Flush')