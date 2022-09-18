// Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.

// Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

// Return the minimum time Bob needs to make the rope colorful.

const minCost = function(s, cost) {
  let total = 0;
  for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i - 1]) {
          if (cost[i] < cost[i - 1]) {
              [cost[i], cost[i - 1]] = [cost[i - 1], cost[i]];
          }
          total += Math.min(cost[i], cost[i - 1]);
      }
  }
  return total;
};

console.log(minCost("aaabbbabbbb", [3,5,10,7,5,3,5,5,4,8,1]) === 26)