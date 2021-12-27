// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

var generateParenthesis = function(n) {
  var resultArr = [];
  var func = (string, numClosedPar, numOpenPar) => {
    if (numOpenPar === n) {
      for (let i = 0; i < numOpenPar - numClosedPar; i++) {
        string += ')';
      }
      return resultArr.push(string);
    }
    string += '(';
    func(string, numClosedPar, numOpenPar + 1);
    if (numOpenPar - numClosedPar > 0) {
      string = string.slice(0, -1);
      string += ')';
      func(string, numClosedPar + 1, numOpenPar);
    }
  }
  func('(', 0, 1);
  return resultArr;
};

console.log(generateParenthesis(3))