// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

// The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

// Return the earliest year with the maximum population.

const maximumPopulation = function (logs) {
  const years = new Array(101).fill(0);
  for (let i = 0; i < logs.length; i++) {
    years[logs[i][0] - 1950]++;
    years[logs[i][1] - 1950]--;
  }
  let current = 0;
  let max = 0;
  let maxYear = 0;
  for (let i = 0; i < 101; i++) {
    current += years[i];
    if (current > max) {
      max = current;
      maxYear = i;
    }
  }
  return maxYear + 1950;
};

console.log(maximumPopulation([[1950, 1961], [1960, 1971], [1970, 1981]]) === 1960)