// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

const letterCasePermutation = function(s) {
  const resArr = [];
  const changeCase = function(arr, i) {
      while (i < arr.length) {
          if (arr[i].match(/[a-z]/i)) {
              changeCase(arr, i + 1);
              if (arr[i] === arr[i].toUpperCase()) {
                  arr[i] = arr[i].toLowerCase();
              } else {
                  arr[i] = arr[i].toUpperCase();
              }
               return changeCase(arr, i + 1);
          }
          i++;
      }
      resArr.push(arr.join(''));
  }
  changeCase(s.split(''), 0);
  return resArr;
};

console.log(letterCasePermutation('a1b2'))