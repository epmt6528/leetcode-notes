/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  if (nums.length <= 2) return nums[0];

  let numsCounter = {};
  for (let i = 0; i < nums.length; i++) {
    numsCounter[nums[i]] = (numsCounter[nums[i]] || 0) + 1;
  }

  let majorityNumber = null;
  for (let i = 0; i < Object.keys(numsCounter).length; i++) {
    if (
      majorityNumber === null ||
      numsCounter[Object.keys(numsCounter)[i]] > numsCounter[majorityNumber]
    ) {
      majorityNumber = Object.keys(numsCounter)[i];
    }
  }

  return +majorityNumber;
};

// Boyer–Moore majority vote algorithm
var majorityElement = function (nums) {
  let sol = 0,
    cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (cnt == 0) {
      sol = nums[i];
      cnt = 1;
    } else if (sol == nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  return sol;
};
