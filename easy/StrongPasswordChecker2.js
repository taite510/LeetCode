// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

const strongPasswordCheckerII = function (password) {
  if (password.match(/^(?!.*(.)\\1)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()+-]).{8,}$/)) {
    for (let i = 1; i < password.length; i++) {
      if (password[i] === password[i - 1]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

console.log(strongPasswordCheckerII('IloveLe3tcode!') === true)
console.log(strongPasswordCheckerII('Me+You--IsMyDream') === false)