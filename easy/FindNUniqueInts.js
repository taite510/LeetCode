// Given an integer n, return any array containing n unique integers such that they add up to 0.

const sumZero = function (n) {
  const res = []
  let i = 0
  if (n % 2 !== 0) {
    res.push(0)
    i++
  }
  while (i !== n) {
    res.push(i + 1, -(i + 1))
    i += 2
  }
  return res
};

const ans = sumZero(25)
console.log(ans.reduce((partialSum, a) => partialSum + a, 0) === 0)