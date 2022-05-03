// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

const numWaterBottles = function(numBottles, numExchange) {
  let total = 0;
  const func = (full, empty) => {
    total += full
    empty += full
    full = Math.floor(empty / numExchange)
    empty = empty - (full * numExchange)
    if (full > 0) {
      func(full, empty)
    }
  }
  func(numBottles, 0)
  return total
};

const testNumBottles = 9;
const testNumExchange = 3;
console.log(numWaterBottles(testNumBottles, testNumExchange))