// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = function(prices) {
  let max = 0;
  let low = Infinity;
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    if (price < low) {
      low = price;
    } else if (max < price - low) {
      max = price - low;
    }
  }
  return max;
};

console.log(maxProfit([7,6,4,3,1]))