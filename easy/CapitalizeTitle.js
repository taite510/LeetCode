// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

const capitalizeTitle = function (title) {
  title = title.toLowerCase()
    .split(' ')
    .map((s) => {
      if (s.length > 2) {
        s = s.charAt(0).toUpperCase() + s.substring(1);
      }
      return s;
    })
    .join(' ');
  return title;
};

console.log(capitalizeTitle('capiTalIze tHe titLe') === 'Capitalize The Title')