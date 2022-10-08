// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.


// slow solution
const findRelativeRanks = function (score) {
  const ranks = new Array(score.length).fill(1);
  for (let i = 0; i < score.length; i++) {
    for (let j = i + 1; j < score.length; j++) {
      if (score[i] > score[j]) {
        ranks[j]++;
      } else {
        ranks[i]++;
      }
    }
    if (ranks[i] < 4) {
      if (ranks[i] === 1) {
        ;
        ranks[i] = 'Gold Medal'
      } else if (ranks[i] === 2) {
        ranks[i] = 'Silver Medal';
      } else {
        ranks[i] = 'Bronze Medal';
      }
    } else {
      ranks[i] += '';
    }
  }
  return ranks;
};

// faster solution
const fastFindRelativeRanks = function (score) {
  const metals = {
    "1": "Gold Medal",
    "2": "Silver Medal",
    "3": "Bronze Medal",
  }
  const sortedScore = [...score].sort((a, b) => b - a);
  const ranks = new Array(score.length);
  const obj = {};
  for (let i = 0; i < sortedScore.length; i++) {
    obj[sortedScore[i]] = metals[`${i + 1}`] || `${i + 1}`;
  }
  for (let i = 0; i < score.length; i++) {
    ranks[i] = obj[score[i]];
  }
  return ranks;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]))
console.log(fastFindRelativeRanks([10, 3, 8, 9, 4]))