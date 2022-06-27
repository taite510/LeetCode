// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

const maximumWealth = function(accounts) {
  let max = 0;
  accounts.forEach((account) => {
    let total = 0 ;
    for (let i = 0; i < account.length; i++) {
    total += account[i];
    }
    if (total > max) {
        max = total;
    }
  })
  return max;
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))