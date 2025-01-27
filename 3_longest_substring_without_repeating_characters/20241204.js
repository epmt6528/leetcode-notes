/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let currSubstring = []
  let longestLength = 0

  const resetCurrSubstring = (lastLetter) => {
      currSubstring.splice(0, findLetterInCurrSubstring(lastLetter) + 1)
  }

  const compareLengths = () => {
      if(currSubstring.length > longestLength) {
          longestLength = currSubstring.length
      }
  }

  const registerLetter = (letter) => {
      currSubstring.push(letter)
  }

  const findLetterInCurrSubstring = (targetLetter) => {
      return currSubstring.findIndex(letter => letter === targetLetter)
  }

  for(const currLetter of s){
      if(currLetter === " "){
          if(currSubstring.length > 0){
              if(findLetterInCurrSubstring("space") === -1){
                  registerLetter("space")
                  compareLengths()
              }
              resetCurrSubstring(currLetter)
              continue
          } else {
              registerLetter("space")
          }
      } else {
          if(findLetterInCurrSubstring(currLetter) >= 0) {
              resetCurrSubstring(currLetter)
          } 

          registerLetter(currLetter)
      }

      compareLengths()
  }

  return longestLength
};


function lengthOfLongestSubstring(s) {
  let charSet = new Set();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    while (charSet.has(s[end])) {
      charSet.delete(s[start]);
      start++;
    }
    charSet.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}