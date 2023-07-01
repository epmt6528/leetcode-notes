/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(n) Frequency Map 66.96%/79.96%
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] ?? 0) + 1;
    map[t[i]] = (map[t[i]] ?? 0) - 1;
  }

  for (let i = 0; i < Object.keys(map).length; i++) {
    if (map[Object.keys(map)[i]] !== 0) return false;
  }

  return true;
};

// O(n) 31.65%/16.48%
var isAnagram = function (s, t) {
  return s.split("").sort().join() === t.split("").sort().join();
};

// In case the string contains Unicode characters
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let count = {};
  for (let i = 0; i < s.length; i++) {
    count[s.charAt(i)] = (count[s.charAt(i)] || 0) + 1;
    count[t.charAt(i)] = (count[t.charAt(i)] || 0) - 1;
  }

  for (let key in count) {
    if (count[key] !== 0) return false;
  }

  return true;
};
