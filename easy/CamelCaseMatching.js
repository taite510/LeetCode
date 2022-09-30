// Given an array of strings queries and a string pattern, return a boolean array answer where answer[i] is true if queries[i] matches pattern, and false otherwise.

// A query word queries[i] matches pattern if you can insert lowercase English letters pattern so that it equals the query. You may insert each character at any position and you may not insert any characters.

const camelMatch = function (queries, pattern) {
  const len = pattern.length;
  return queries.map((query) => {
    let match = 0;
    for (let char of query) {
      if (pattern[match] === char) {
        match++;
      } else if (char === char.toUpperCase()) {
        return false;
      }
    }
    return match === len;
  });
};

console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FB"))