// Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

var finalPrices = function(prices) {
  let arr = [];
  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    let newPrice = prices[i];
    while (j < prices.length) {
      if (prices[j] <= prices[i]) {
        newPrice -= prices[j];
        break;
      }
      j++;
    };
    arr.push(newPrice)
  }
  return arr;
};

console.log(finalPrices([8,4,6,2,3]))