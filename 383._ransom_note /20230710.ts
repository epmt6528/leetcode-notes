/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = {};

  for (let i = 0; i < magazine.length; i++) {
    magazineMap[magazine[i]] = (magazineMap[magazine[i]] ?? 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazineMap[ransomNote[i]]) {
      magazineMap[ransomNote[i]]--;
    } else {
      return false;
    }
  }

  return true;
};

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  let ransomNoteArray = ransomNote.split("");
  let magazineArray = magazine.split("");

  for (let i = 0; i < ransomNoteArray.length; i++) {
    const indexInMagazine = magazineArray.findIndex(
      (letterInmagazineArray) => letterInmagazineArray === ransomNoteArray[i]
    );
    if (indexInMagazine === -1) return false;
    magazineArray.splice(indexInMagazine, 1);
  }

  return true;
};
