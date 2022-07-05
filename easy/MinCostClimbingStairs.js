// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

const minCostClimbingStairs = function(cost) {
  for (let i = cost.length - 3; ~i; i--) {
      cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }
  return Math.min(cost[0], cost[1]);
};

console.log(minCostClimbingStairs([0,1,2,2]))