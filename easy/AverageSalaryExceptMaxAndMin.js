// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

const average = function(salary) {
  let total = 0;
  const sorted = [...salary].sort((a,b) => a - b);
  for (let i = 1; i < sorted.length - 1; i++) {
      total += sorted[i];
  }
  return total / (sorted.length - 2);
};

console.log(average([4000,3000,1000,2000]))
