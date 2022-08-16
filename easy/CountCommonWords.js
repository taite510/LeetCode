// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

const arrToObj = function(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  return obj;
}

const countWords = function(words1, words2) {
  const obj1 = arrToObj(words1);
  const obj2 = arrToObj(words2);
  let count = 0;
  for (let key in obj1) {
      if (obj1[key] === 1 & obj2[key] === 1) {
          count++;
      }
  }
  return count;
};

console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]))