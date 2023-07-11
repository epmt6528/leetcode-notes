/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let leftP = 1;
    let rightP = n;

    while (leftP <= rightP) {
      const middleP = Math.floor((leftP + rightP) / 2);

      if (isBadVersion(middleP)) {
        rightP = middleP - 1;
      } else {
        leftP = middleP + 1;
      }
    }

    return leftP;
  };
};
