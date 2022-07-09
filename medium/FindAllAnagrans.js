// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// slow
var findAnagrams = function(s, p) {
  let res = [];
  const sortedP = p.split('').sort().join('');
  for (let i = 0; i <= s.length - p.length; i++) {
      const sortedSubstring = s.substring(i, i + p.length).split('').sort().join('');
      if (sortedP === sortedSubstring) {
          res.push(i);
      }
  }
  return res;
};


// faster solution I found online
const findAnagrams2 = function(s, p) {
  const res = [];
  const arrP = new Array(26).fill(0);
  const arrS = new Array(26).fill(0);
  [...p].forEach(character => {
      arrP[character.charCodeAt(0)-97]++;
  });

  [...s].forEach((character, index) => {
      if (index >= p.length) {
        arrS[s.charCodeAt(index-p.length)-97]--;
      }
      arrS[character.charCodeAt(0)-97]++;
      if (arrP.join()===arrS.join()) {
        res.push(index+1-p.length);
      }
  });
  return res;
};

console.log(findAnagrams2('abab', 'ab'))
