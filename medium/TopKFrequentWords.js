// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

const topKFrequent = function(words, k) {
  const obj = {};
  let arr = [];
  let res = [];
  for (let i = 0; i < words.length; i++) {
    obj[words[i]] = obj[words[i]] + 1 || 1;
  }
  for (let word in obj) {
    arr.push([word, obj[word]])
  }
  arr.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1
    } else if (a[1] < b[1]) {
      return 1
    } else {
      return a[0].localeCompare(b[0])
    }
  })
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }
  return res
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2))