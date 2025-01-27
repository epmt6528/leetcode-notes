// less efficient solution but is a good demonstration of how divide-and-conquer principles can be applied to array problems
function maxSubArray(nums) {
  function helper(left, right) {
    if (left === right) {
      // Base case: only one element
      return nums[left];
    }

    const mid = Math.floor((left + right) / 2);

    // Recursive step: find max in left, right, and crossing subarrays
    const leftMax = helper(left, mid);
    const rightMax = helper(mid + 1, right);
    const crossMax = findCrossMax(nums, left, mid, right);

    // Return the maximum of the three
    return Math.max(leftMax, rightMax, crossMax);
  }

  function findCrossMax(nums, left, mid, right) {
    // Find the max subarray sum starting from the middle to the left
    let leftSum = -Infinity;
    let currentSum = 0;
    for (let i = mid; i >= left; i--) {
      currentSum += nums[i];
      leftSum = Math.max(leftSum, currentSum);
    }

    // Find the max subarray sum starting from the middle to the right
    let rightSum = -Infinity;
    currentSum = 0;
    for (let i = mid + 1; i <= right; i++) {
      currentSum += nums[i];
      rightSum = Math.max(rightSum, currentSum);
    }

    // Combine the two parts
    return leftSum + rightSum;
  }

  return helper(0, nums.length - 1);
}
