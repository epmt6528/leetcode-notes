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