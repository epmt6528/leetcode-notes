/**
 * @param {string} s
 * @return {boolean}
 */
// R 15.40% M 87.51%
var isValid = function (s) {
  if (s.length === 1) return false;

  let stack = [];

  const hasTheOtherPair = (openBracket) => {
    if (stack.length === 0) return false;
    return stack.pop() === openBracket;
  };

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ")":
        if (!hasTheOtherPair("(")) return false;
        break;
      case "]":
        if (!hasTheOtherPair("[")) return false;
        break;
      case "}":
        if (!hasTheOtherPair("{")) return false;
        break;
      default:
        stack.push(s[i]);
    }
  }

  return stack.length === 0;
};

// R 76.5% M 94.47%
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] === "(") {
      stack.push(")");
    } else if (stack.pop() !== s[idx]) {
      return false;
    }
  }
  return !stack.length;
};
