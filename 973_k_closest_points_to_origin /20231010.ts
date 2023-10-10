/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

const simpleDist = ([x, y]) => {
  return x * x + y * y;
};

// sort approach
// runtime: O(NlogN)
// space: O(1)
var kClosest = function (points, k) {
  points.sort((a, b) => simpleDist(a) - simpleDist(b));
  return points.slice(0, k);
};
