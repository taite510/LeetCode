// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

var shortestToChar = function(s, c) {
  let arrOfC = [];
  let resultArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      arrOfC.push(i)
    }
  }
  for (let i = 0; i < s.length; i++) {
    let smallestDist = Infinity;
    for (let j = 0; j < arrOfC.length; j++) {
      let dist = Math.abs(arrOfC[j] - i)
      if (dist === 0) {
        smallestDist = dist;
        break;
      }
      if (dist < smallestDist) {
        smallestDist = dist;
      }
    }
    resultArr.push(smallestDist)
  }
  return resultArr;
};

let testS = "loveleetcode";
let testC = "e";

console.log(shortestToChar(testS, testC))