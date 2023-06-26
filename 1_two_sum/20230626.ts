/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2)
var twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];

  let leftP = 0;
  let rightP = 1;

  for (let i = leftP; i < nums.length; i++) {
    for (let j = rightP; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }

    leftP++;
    rightP++;
  }
};

// O(n) with hash map
var twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in hashMap) return [hashMap[complement], i];
    hashMap[nums[i]] = i;
  }
};
