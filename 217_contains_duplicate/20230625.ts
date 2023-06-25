/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length <= 1) return false;

  let counter = {};
  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) {
      return true;
    } else {
      counter[nums[i]] = 1;
    }
  }
  return false;
};

var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};
