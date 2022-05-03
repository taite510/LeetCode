// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = function(n) {
  let options = 0;
  const func = (currentNum) => {
    currentNum -= 1;
    if (currentNum === 0) {
      options++;
      return;
    }
    func(currentNum);
    currentNum -= 1;
    if (currentNum === 0) {
      options++;
      return;
    }
    func(currentNum);
  }
  func(n);
  return options;
};

//faster solution I found online:

const climbStairs2 = function(n) {
  a = b = 1;
  while (n--)
      a = (b += a) - a;
  return a;
};

console.log(climbStairs2(45))