/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let maxLength;

  if (a.length > b.length) {
    maxLength = a.length;
    b = "0".repeat(a.length - b.length) + b;
  } else {
    maxLength = b.length;
    a = "0".repeat(b.length - a.length) + a;
  }

  let carry = 0;
  let result = "";

  for (let i = maxLength - 1; 0 <= i; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    result = (sum % 2) + result;
    carry = sum >= 2 ? 1 : 0;
  }

  return carry ? "1" + result : result;
};
