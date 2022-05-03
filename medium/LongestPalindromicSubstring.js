// Given a string s, return the longest palindromic substring in s.

const isPalindrome = function(x) {
  for (let i = 0; i < (x.length)/2; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
        return false;
    }
  }
  return true;
};
const longestPalindrome = function(s) {
  let palin = ''
  const func = (string) => {
    if (isPalindrome(string)) {
      palin = string
    } else {
      if (string.length > palin.length) {
        func(string.slice(0, -1))
        func(string.slice(1))
      }
    }
  }
  func(s)
  return palin;
};

// faster solution I found online:

function longestPalindrome2(s) {
  let ll = 0, rr = 0;

  for (let i = 0; i < s.length; i++)
    for (let j of [i, i+1])
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
        [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];

  return s.substring(ll, rr+1);
}

console.log(longestPalindrome('babad1asdasdasdassad'))

console.log(longestPalindrome2("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))