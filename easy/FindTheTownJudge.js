// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

const findJudge = function (n, trust) {
  const counts = new Array(n + 1).fill(0);
  for (let [i, j] of trust) {
    counts[i] -= 1
    counts[j] += 1
  }
  for (let i = 1; i < counts.length; i++) {
    if (n - 1 === counts[i]) {
      return i
    }
  }
  return -1
};

console.log(findJudge(2, [1, 2]) === 2)
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]) === -1)