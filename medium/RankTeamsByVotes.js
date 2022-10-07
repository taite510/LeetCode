// In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition.

// The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.

// Given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above.

// Return a string of all teams sorted by the ranking system.

const rankTeams = function (votes) {
  const vote = votes[0].split('');
  const score = new Map(vote.map(a => [a, new Array(vote.length).fill(0)]));
  for (const str of votes) {
    for (let i = 0; i < str.length; i++) {
      score.get(str[i])[i]++;
    }
  }
  vote.sort((a, b) => {
    for (let i = 0; i < vote.length; i++) {
      if (score.get(a)[i] > score.get(b)[i]) {
        return -1;
      }
      if (score.get(a)[i] < score.get(b)[i]) {
        return 1;
      }
    }
    return a < b ? -1 : 1;
  })
  return vote.join('');
};

console.log(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]) === 'ACB')