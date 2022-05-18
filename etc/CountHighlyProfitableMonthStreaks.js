function countHighlyProfitableMonths(stockPrices, k) {
  let profitableMonths = 0;
  let streak = 1;
  for (let i = 1; i < stockPrices.length; i++) {
      if (stockPrices[i] > stockPrices[i - 1]) {
          streak++;
      } else {
          streak = 1;
      }
      if (streak >= k) {
          profitableMonths++;
      }
  }
  return profitableMonths;
}

console.log(countHighlyProfitableMonths([5,3,5,7,8], 3))