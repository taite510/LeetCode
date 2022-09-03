// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

const totalMoney = function(n) {
  let total = 0;
  let week = 0;
  let day = 0;
  while (day + week * 7 < n) {
      total += 1 + day + week;
      day++;
      if (day === 7) {
          day = 0;
          week++;
      }
  }
  return total;
};

console.log(totalMoney(10))