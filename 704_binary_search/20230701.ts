/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftP = 0;
  let rightP = nums.length - 1;

  while (leftP <= rightP) {
    const middleIndex = Math.floor((leftP + rightP) / 2);
    const middleNum = nums[middleIndex];
    if (middleNum === target) {
      return middleIndex;
    } else if (middleNum < target) {
      leftP = middleIndex + 1;
    } else {
      rightP = middleIndex - 1;
    }
  }

  return -1;
};
