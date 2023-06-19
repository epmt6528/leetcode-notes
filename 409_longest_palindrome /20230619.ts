/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  let answer = 0;
  let letterCounts = {};

  for (let i = 0; i < s.length; i++) {
    letterCounts[s[i]] = (letterCounts[s[i]] || 0) + 1;
    if (letterCounts[s[i]] % 2 === 0) answer += 2;
  }

  return s.length > answer ? answer + 1 : answer;
};

longestPalindrome("asddfdsfsdfsfwe");
