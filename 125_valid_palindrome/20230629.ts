/**
 * @param {string} s
 * @return {boolean}
 */

// O(n^2)
var isPalindrome = function (s) {
  let sArray = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split();

  while (sArray.length > 1) {
    if (sArray.shift() !== sArray.pop()) return false;
  }

  return true;
};

// O(n)
var isPalindrome = function (s) {
  let formattedS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return formattedS === formattedS.split("").reverse().join("");
};
